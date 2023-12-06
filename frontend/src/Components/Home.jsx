
import { Navbar, Nav, Container} from 'react-bootstrap';
import { useLogoutMutation,useValidateUserMutation } from '../apiSlice/apiSlice.js';
import { useDispatch,useSelector } from 'react-redux';
import { logout } from '../apiSlice/authSlice.js';
import { useNavigate } from 'react-router-dom';
import '../Styles/App.css'

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
        {userInfo ? (
        <div className='center-text'>
          <p>.................................................</p>
          <br></br>
          <p>"Organized collective action challenging the status quo—a social movement— requires leadership that goes far beyond a stereotypical charismatic public persona with whom it is often identified. Unable to rely on established bureaucratic structures for coordination, evaluation, and action, such action depends on voluntary participation, shared commitments, and ongoing motivation. Movements must mobilize under risky conditions not only because well-resourced oppositions often resist their efforts, but also because the undertaking itself is fraught with uncertainty about how—and whether—it can happen in the first place."</p>
          <p>"Participating in a social action not only often involves a rearticulation of one’s story of self, us, and now, but marks an entry into a world of uncertainty so daunting that access to sources of hope is essential."</p>
          <p>"Some of us may think our personal stories don’t matter, that others won’t care, or that we should talk about ourselves so much. On the contrary, if we do public work we have a responsibility to give a public account of ourselves – where we came from, why we do what we do, and where we think we’re going. In a role of public leadership, we really don’t have a choice about telling our story of self. If we don’t author our story, others will – and they may tell our story in ways that we may not like."</p>
          <p>"A story is like a poem. It moves not by how long it is, nor how eloquent or complicated. It moves by offering an experience or moment through which we grasp the feeling or insight the poet communicates."</p>
          <p>"Narrative allows us to communicate the values that motivate the choices that we make. Narrative is not talking “about” values; rather narrative embodies and communicates values. And it is through the shared experience of our values that we can engage with others, motivate one another to act, and find the courage to take risks, explore possibility and face the challenges we must face.</p>
          <p>"Narrative allows us to communicate the values that motivate the choices that we make. Narrative is not talking “about” values; rather narrative embodies and communicates values. And it is through the shared experience of our values that we can engage with others, motivate one another to act, and find the courage to take risks, explore possibility and face the challenges we must face.</p>
          <p>In the end, we cannot hope to change the deep power inequalities that increasingly divide our country unless we recognize the need to change all of them for all of us.</p>
          <br>
           </br><br>
           </br>
           <p>.................................................</p>
        </div>
      ) : (
        <div className='center-text'>
          <br></br>
          <br></br>
          <p>Please login to read the notes ....</p>
          <br>
           </br>
        </div>
      )}
      </header>
    );
  };
  
  export default Header;