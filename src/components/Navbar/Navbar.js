import { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleScroll = ()=> {
      if( Window.scrolly < 100){
        setShow (false);
      }
      else{ setShow(true)}
    }

  }, []);

  return (
    <div>
      <img class= "nav__logo " src = "./netflix-logo.jpg" height= "auto" width = "auto" alt="Netflix Logo"/>
      <img class= "nav__avatar" src = "./Netflix-avatar.png" height="auto " width = "auto" alt = "Netflix Avatar"/>
    </div>
  );
};

export default Navbar;
