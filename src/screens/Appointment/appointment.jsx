import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../DoctorSignup/firebase";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Appointment() {
    const { currentUser } = useContext(AuthContext);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true); // State to track loading

    useEffect(() => {
        const fetchAppointments = async () => {
            if (currentUser && currentUser.uid) {
                try {
                    console.log("Fetching appointments for user:", currentUser.uid); // Debugging
                    const q = query(
                        collection(db, "appointments"),
                        where("currentUserId", "==", currentUser.uid),
                        where("verification", "==", "true")
                    );

                    const querySnapshot = await getDocs(q);
                    const items = [];
                    querySnapshot.forEach((doc) => {
                        items.push({ id: doc.id, ...doc.data() });
                    });

                    setData(items);
                    setLoading(false);
                } catch (error) {
                    console.error("Error fetching appointments:", error);
                    setLoading(false);
                }
            } else {
                console.log("No currentUser found."); // Debugging
                setLoading(false);
            }
        };

        fetchAppointments();
    }, [currentUser]);

    if (loading) {
        return <p>Loading appointments...</p>;
    }

    return (
        <>
            {data.length > 0 ? (
                data.map((item) => (
                    <div key={item.id}>
                        <h3>Appointment Details</h3>
                        <p>Patient Name: {item.patientName}</p>
                        <p>Email: {item.patientEmail}</p>
                        <p>Phone: {item.patientPhone}</p>
                        <p>Date: {item.date}</p> {/* Display date as a string */}
                        <p>Time: {item.time}</p> {/* Display time as a string */}
                    </div>
                ))
            ) : (
                <p>No appointments found for this user.</p>
            )}
        </>
    );
}
