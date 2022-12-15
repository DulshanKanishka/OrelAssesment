import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import classes from './Header.module.css';

function Header() {
    return (
        <Navbar bg="light" expand="lg" className={classes.navmain}>
            <Container>
                <Navbar.Brand href="#home" className={classes.mainText}>Countries of the world</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <a className={classes.aboutLink} href="#/">about</a>
                    </Navbar.Text>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default Header;