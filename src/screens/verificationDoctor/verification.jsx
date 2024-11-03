import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../DoctorSignup/firebase";

export default function Verification() {
    const initialOptions = {
        clientId: "AZbauBz0RNMsm-PRXYkWLinbtjtS5i1XtTBt4817OqFRQRBeT7M8ag9p6TLR6vQHsv5gQREuOH-G1U-K",
        currency: "USD",
    };

    const updateVerificationStatus = async () => {
        try {
            // Ensure user is authenticated
            const doctor = auth.currentUser;
            // console.log(doctor.displayName);
            // console.log(doctor.email);
            if (!doctor) {
                throw new Error("User is not authenticated.");
            }

            // Reference the user's document in Firestore
            const userDocRef = doc(db, "doctor", doctor.uid);
            await updateDoc(userDocRef, { verification: "true" });
            console.log("Verification status updated to true in Firebase");
        } catch (error) {
            console.error("Error updating verification status:", error);
        }
    };

    return (
        <div className="App">
            <p className="text-center mt-5 font-weight-bold ">Welcome doctor {}, you must pay $10 one time to add your account to our platform.</p>
            <div className="d-flex justify-content-center align-items-center">
                <PayPalScriptProvider options={initialOptions}>
                    <PayPalButtons
                        style={{ layout: "vertical" }}
                        createOrder={(data, actions) => {
                            return actions.order.create({
                                purchase_units: [
                                    {
                                        amount: {
                                            value: "10.00",
                                        },
                                    },
                                ],
                            });
                        }}
                        onApprove={(data, actions) => {
                            return actions.order.capture().then((details) => {
                                alert("Transaction completed by " + details.payer.name.given_name);
                                updateVerificationStatus(); 
                            });
                        }}
                    />
                </PayPalScriptProvider>
            </div>
        </div>
    );
}
