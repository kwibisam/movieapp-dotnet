import React from 'react';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import MoviePage from './pages/MoviePage';
import SearchPage from './pages/SearchPage';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';

export default function App() {
  return (
    <BrowserRouter>
      <div className="site-container">
        <header>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>Home</Navbar.Brand>
              </LinkContainer>
            </Container>
          </Navbar>
        </header>
        <main>
          <div>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/movie/:id" element={<MoviePage />}></Route>
              <Route path="/search/:query" element={<SearchPage />}></Route>
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}
