import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons' 
import { faBlog } from "@fortawesome/free-solid-svg-icons";

const Footer = ()=>{
    return(
        <footer className="Footer">
    <a href="https://github.com/haegi-git"><FontAwesomeIcon className="Footer_icon" icon={faGithub}></FontAwesomeIcon></a>
    <a href="https://velog.io/@chemi163"><FontAwesomeIcon className="Footer_icon" icon={faBlog}></FontAwesomeIcon></a>
  </footer>
    )
}
export default Footer