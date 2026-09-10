import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useChat } from "../hooks/useChat";
import { initializeSocketConnection } from "../service/chat.socket";

function Dashboard(){
    const chat = useChat()

    useEffect(()=>{
        chat.initializeSocketConnection()
    },[])
    const {user, loading, error} = useSelector(
        state => state.auth || {}
    );


    return (
        <div>
            <h1>
                Welcome {user?.username}
            </h1>
        </div>
    )
}

export default Dashboard;

