const Navbar = () => {

  return (
<nav>
    <div className="nav-logo">Lagos <span>Sports</span> Summit</div>
    <ul className="nav justify-content-center">
    
        <li className="nav-item">
            <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Speakers</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Schedule</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Tickets</a>
        </li>
    </ul>
     <button className="nav-btn">Register now</button>
</nav>
   )
}

export default Navbar;