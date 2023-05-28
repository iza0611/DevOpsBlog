import "./header.css";
import header2 from "./../../images/header2.png"

function Header() {
  return (
    <div className="header">
        <div className="title">
            <span className="titlelarge">blogging</span>
            <span className="titlesm">blog whatever you want..</span>
        </div>
        <img className="headerimg" src={header2} alt=""/>
    </div>
  )
}

export default Header
