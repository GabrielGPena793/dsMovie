import {ReactComponent as GitHubIcon} from "assets/img/github.svg"
import './styles.css'

function NavBar(){

    return(
        <header>
        <nav className="container">
            <div className="dsmovie-nav-content">
                <div>
                    <a href="/">
                        <h1> <span>DS</span>Movie</h1>
                    </a>
                </div>
                <a href="https://github.com/GabrielGPena793">
                    <div className="dsmovie-contact-content">
                        <GitHubIcon/>
                        <p>/GabrielPena</p>
                    </div>
                </a>  
            </div>
        </nav>
      </header>
    )
}

export default NavBar;