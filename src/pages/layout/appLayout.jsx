import { Outlet } from "react-router";
import { Link } from "react-router-dom";

export default function AppLayout() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/search'>Search</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}