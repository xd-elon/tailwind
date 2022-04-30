import React from 'react';

import AplicantInformation from './components/ApplicantInformation';
import CardFooterPage from './components/CardFooterPage';
import Example from "./components/examples";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <AplicantInformation />
      <CardFooterPage />
    </>
  );
}

export default App;

