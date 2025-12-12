import {useState, useEffect} from "react";
import { useAuth } from "../context/AuthContext";
import API from "../api/apiClient";

export default function Dashboard() {
    const [updates, setUpdates] = useState([]);
    const {user, logout} = useAuth();
    
    const fetchUpdates = async() => {
        const res = await API.get("/updates/my");
        setUpdates(res.data);
    };

    useEffect (() => { fetchUpdates(); }, []);
    return(
        <div className="p-6">
            <div className="min-h-screen flex justify-center items-center bg-blue-100">
                <h1 className="text-xl font-bold mb-4"> Dashboard</h1>
                <h2 className="text-xl font-bold mb-4"> Welcome {user?.name}</h2>
                <button onClick={logout} className="bg-red-500 text-white px-3 py-1 rounded">Logout</button>
                <button onClick={ async () => {
                    const title = prompt("Title");
                    const content = prompt("Context");
                    await API.post("/updates", {title, content});
                    fetchUpdates();
                }} className="bg-green-500 text-white px-3 py-2 rounded mb-4"
                >Add New Task</button>
                <ul>
                    {updates.map( (u) => (
                        <li key={u._id} className="border p-3 rounded mb-2">
                            <h3 className="font-bold">{u.title}</h3>
                            <p>{u.content}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};