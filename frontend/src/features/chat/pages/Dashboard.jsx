import { useSelector } from "react-redux";

function Dashboard(){

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

