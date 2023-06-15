import React from 'react';
import LandingPage from '../components/Home/LandingPage';
// import homeBackground2 from '../assets/home_background2.jpg';
// import { styled  } from '@mui/system';
// import Card from '@mui/material/Card';


// const Background2 = styled('div')({
//   position: 'fixed',
//   top: '101vh',
//   left: 0,
//   width: '100%',
//   maxHeight: '100vh',
//   zIndex: -1,
//   backgroundSize: 'cover',
//   backgroundRepeat: 'no-repeat',
//   backgroundPosition: 'center',
//   backgroundAttachment: 'fixed',
// });

const Home = () => {

  return (
    <div>
      <LandingPage sx={{ maxHeight: '100vh' }}/>
      {/* <Card sx={{ marginTop: '100vh'}}>
        Hello
      </Card> */}
      {/* <Background2 style={{ backgroundImage: `url(${homeBackground2})` , height: '100vh'}}>
                Hello
      </Background2> */}
    </div>
  );
};

export default Home;
