import {useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail ] = useState("");
    const [password, setPassword ] = useState("");
    const navigate = useNavigate();
    const { login } = useAuth(); 
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            await login(email, password);
            navigate("/dashboard");
            }
            catch(error){
                alert("Login failed");
            }
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-blue-100">
            <h2 className="text-xl font-bold mb-4"> Nexcore Alliance - Login</h2>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md w-80">
            
            <input className="border p-2 w-full mb-2" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            
            <input className="border p-2 w-full mb-2" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

            <button className="bg-blue-500 text-white px-4 rounded w-full">Login</button>

            </form>
        </div>
    );

}