import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

export default class Header extends Component {
	render() {
		return (
			<header class="navbar is-primary" role="navigation">
				
				{/* <h1>Preact App</h1>
				<nav>
					<Link activeclass={style.active} href="/">Home</Link>
					<Link activeclass={style.active} href="/profile">Me</Link>
					<Link activeclass={style.active} href="/profile/john">John</Link>
				</nav> */}
			</header>
		);
	}
}
