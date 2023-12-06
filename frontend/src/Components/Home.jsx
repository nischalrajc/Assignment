
import { Navbar, Nav, Container} from 'react-bootstrap';
import { useLogoutMutation,useValidateUserMutation } from '../apiSlice/apiSlice.js';
import { useDispatch,useSelector } from 'react-redux';
import { logout } from '../apiSlice/authSlice.js';
import { useNavigate } from 'react-router-dom';

import { useEffect } from 'react';


const Header = () => {

  const {userInfo} = useSelector((state)=>state.auth)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();
  const [validateUser] = useValidateUserMutation();


  useEffect(()=>{
    validate()
  },[])

  const validate = async()=>{
    try {
      if(userInfo){
       const res = await validateUser().unwrap()
      }
    
    } catch (error) {
      console.log("error",error);
      dispatch(logout());
      navigate('/');
    }
  }



  const logoutHandler = async ()=>{
    try {
      await logoutApiCall().unwrap()
      dispatch(logout());
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
              {/* <Nav className='ms-auto'>
              <Navbar.Brand onClick={logoutHandler}>logout</Navbar.Brand>   
              </Nav> */}

             {/* {userInfo ? (
                  <>
                  <Nav className='ms-auto'>
              <Navbar.Brand onClick={logoutHandler}>logout</Navbar.Brand>   
              </Nav>
                  </>
                ) : (
                  <>
                  <Nav className='ms-auto'>
              <Navbar.Brand onClick={()=>navigate('/login')}>login</Navbar.Brand>   
              </Nav>
                  </>
                ) } */}

<Nav className='ms-auto'>
              {userInfo ? (
                <Navbar.Brand onClick={logoutHandler}>Logout</Navbar.Brand>
              ) : (
                <Navbar.Brand onClick={() => navigate('/login')}>Login</Navbar.Brand>
              )}
            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div>
          <h3>
            my name is 
          </h3>
        </div>
      </header>

    //   <header>
    //   <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
    //     <Container>
    //       <Navbar.Brand>SkyGOal</Navbar.Brand>
    //       <Navbar.Toggle aria-controls='basic-navbar-nav' />
    //       <Navbar.Collapse id='basic-navbar-nav'>
    //         <Nav className='ms-auto'>
    //           {userInfo ? (
    //             <Navbar.Brand onClick={logoutHandler}>Logout</Navbar.Brand>
    //           ) : (
    //             <Navbar.Brand onClick={() => navigate('/login')}>Login</Navbar.Brand>
    //           )}
    //         </Nav>
    //       </Navbar.Collapse>
    //     </Container>
    //   </Navbar>
    //   <div>
    //     <h3>My name is {userInfo ? userInfo.name : 'Guest'}</h3>
    //   </div>
    // </header>
    );
  };
  
  export default Header;