import React from 'react';

import GlobalStyle from './styles/global';

// import SignIn from './pages/Signin';
import SignUp from './pages/Signup';

const App: React.FC = () => (
  <>
    <SignUp />
    <GlobalStyle />
  </>
);

export default App;
