import React from 'react';
import './App.css';
import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

// COMPONENTS
import Header from './components/HomeScreen/Header';
import Main from './components/HomeScreen/Main';
import Footer from './components/HomeScreen/Footer';

const StyledApp = styled.div`
  min-width: 100%;
  min-height: 100%;
  background-color: #fafafa;

  /* Grid */
  display: grid;
  grid-template-areas:
    'header'
    'main'
    'footer';
  grid-template-columns: 1fr;
  grid-template-rows: 6.4rem 1fr 6.4rem;
`;

const App = () => {
  return (
    <BrowserRouter>
      <StyledApp>
        <Header />
        <Main />
        <Footer />
      </StyledApp>
    </BrowserRouter>
  );
};

export default App;
