


import { Navbar, Nav, Container} from 'react-bootstrap';
import { useLogoutMutation } from '../apiSlice/apiSlice.js';
import { useDispatch } from 'react-redux';
import { logout } from '../apiSlice/authSlice.js';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();


  const logoutHandler = async ()=>{
    try {
      await logoutApiCall().unwrap()
      dispatch(logout());
      console.log('Navigating to /login');
      navigate('/login');
    } catch (err) {
      console.log(err)
    }
  }

    return (
      <header>
        <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
          <Container>
              <Navbar.Brand >SkyGOal</Navbar.Brand>           
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ms-auto'>
              <Navbar.Brand onClick={logoutHandler}>logout</Navbar.Brand>   
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
  };
  
  export default Header;