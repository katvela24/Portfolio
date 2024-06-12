import { NavLink } from "react-router-dom"

const Navigation = () => {
    return (
        <section className="card" id="navigation">
       
        <nav>
            <ul>
                <li>
                    <NavLink to="/">
                        About Me
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/portfolio">
                        Portfolio
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/contact">
                        Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/resume">
                        Resume
                    </NavLink>
                </li>

            </ul>
        </nav>
  
      </section>
  
    )
}

export default Navigation