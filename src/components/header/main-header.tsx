import classes from './main-header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import logoImg from '@/assets/logo.png';
import MainHeaderBackground from './main-header-background';
import NavLink from './nav-link';

const MainHeader = () => {
	return (
		<>
			<MainHeaderBackground />
			<header className={classes.header}>
				<Link href={'/'} className={classes.logo}>
					<Image
						src={logoImg}
						priority={true}
						alt='A plate with food on it'
					/>
					NextLevel Food
				</Link>

				<nav className={classes.nav}>
					<ul>
						<li>
							<NavLink href='/meals'>Meals</NavLink>
						</li>
						<li>
							<NavLink href='/community'>Community</NavLink>
						</li>
						<li>
							<NavLink href='/news'>News</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
};

export default MainHeader;
