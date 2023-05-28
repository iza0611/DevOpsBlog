import "./sidebar.css";
import sidebarimg from "./../../images/sidebar.png";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT US</span>
        <img src={sidebarimg} alt="" />
        <p>
          Provides a safe environment for the users to blog about various topics
          that they might be interested in.
        </p>
      </div>
    </div>
  );
}

export default Sidebar;
