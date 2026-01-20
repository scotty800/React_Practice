import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    return (
        <div>
            <Navbar />
            <button onClick={() => navigate("/about")}>About</button>
            <button onClick={() => navigate("/users")}>Users</button>
            <div>Welcome to the Home Page</div>
        </div>
    );
}

export default Home;