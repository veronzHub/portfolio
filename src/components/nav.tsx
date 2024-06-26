import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={`/`}>Home</Link>
        </li>
        <li>
          <Link to={`/contact`}>Contact</Link>
        </li>
        <li>
          <Link to={`/resume`}>Resume</Link>
        </li>
        <li>
          <Link to={`/projects`}>Projects</Link>
        </li>
      </ul>
    </nav>
  );
}
