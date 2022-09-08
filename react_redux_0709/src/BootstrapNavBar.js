import {Link} from 'react-router-dom'
import {Nav,NavLink, Navbar} from 'react-bootstrap'



const BootstrapNavBar = () => {
    return(
        <Navbar expand='sm' bg='light'>
            <Navbar.Toggle area-controls='myNavbar'/>
            <Navbar.Collapse>
                <Nav id='myNavbar'>
                    <NavLink as={Link} to='/' >Home</NavLink>
                    <NavLink as={Link} to='/countries' >Countries</NavLink>
                    <NavLink as={Link} to='/quota' >quota</NavLink>
                    {/* <NavLink as={Link} to='/flags' ></NavLink> */}

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
} 
export default BootstrapNavBar