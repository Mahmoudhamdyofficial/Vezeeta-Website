import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../DoctorSignup/firebase";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./appointment.css";
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
            <div className="table-container appointment">
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>اسم الطبيب</th>
                            <th>  تاريخ الكشف </th>
                            <th>وقت الكشف </th>
                            <th>الحالة</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.doctorName}</td>
                                <td>{item.date}</td>
                                <td>{item.time}</td>
                                <td className={item.status === "cancelled" ? "cancelled": item.status === "confirmed" ? "confirmed" : item.status === "" ? "pending" : ""} >{item.status==="" ? "pending" : item.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        ) : (
            <p className="centered-text">No appointments found for this user.</p>

        )}
    </>
    );
}
