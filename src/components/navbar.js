const Navbar = () => {

  return (
<nav>
    <div className="nav-logo">Lagos <span>Sports</span> Summit</div>
    <ul className="nav justify-content-center">
    
        <li className="nav-item">
            <a className="nav-link" href="#about">About</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#speakers">Speakers</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#schedule">Schedule</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#tickets">Tickets</a>
        </li>
    </ul>
     <button className="nav-btn">Register now</button>
</nav>
   )
}

export default Navbar;