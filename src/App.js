import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import SignInPage from './pages/SignInPage/SignInPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import Layout from './shared/Layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path='/sign-up' element={<SignUpPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
