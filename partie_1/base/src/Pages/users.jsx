import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

const users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
  { id: 3, name: "Charlie", email: "charlie@example.com" }
];

function Users() {
  return (
    <div>
      <Navbar />
      <h1>Users</h1>

      {users.map(user => (
        <div key={user.id}>
          <Link to={`/user/${user.id}`}>
            {user.name}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Users;
