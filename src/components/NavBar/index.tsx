import { Link } from 'react-router-dom'

const NavBar = (): JSX.Element => {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">home</Link>
				</li>
				<li>
					<Link to="/legal">legal</Link>
				</li>
			</ul>
		</nav>
	)
}

export default NavBar
