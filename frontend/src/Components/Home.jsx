


import { Navbar, Nav, Container} from 'react-bootstrap';
// import { FaSignInAlt } from 'react-icons/fa';
// import { LinkContainer } from 'react-router-bootstrap';
// import { useSelector, useDispatch } from 'react-redux';
// import { useLogoutMutation,useValidateUserMutation } from '../slices/usersApiSlice';
// import { logout } from '../slices/authSlice';
// import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';


const Header = () => {

//   const {userInfo} = useSelector((state)=>state.auth)

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [logoutApiCall] = useLogoutMutation();
//   const [validateUser] = useValidateUserMutation();

//   useEffect(()=>{
//     validate()
//   },[])


//   const validate = async()=>{
//     try {
//       if(userInfo){
//        const res = await validateUser().unwrap()
//        console.log(res);
//       }
    
//     } catch (error) {
//       console.log(error);
//       dispatch(logout());
//       navigate('/');
//     }
//   }

//   const logoutHandler = async ()=>{
//     try {
//       await logoutApiCall().unwrap()
//       dispatch(logout());
//       navigate('/');
//     } catch (err) {
//       console.log(err)
//     }
//   }

    return (
      <header>
        <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
          <Container>
              <Navbar.Brand >SkyGOal</Navbar.Brand>           
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ms-auto'>
              <Navbar.Brand >logout</Navbar.Brand>   
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
  };
  
  export default Header;