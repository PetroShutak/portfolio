import Layout from '../src/components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import {lazy} from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from 'pages/HomePage';
import AboutPage from 'pages/AboutPage';
// import ProjectsPage from 'pages/ProjectsPage';
import ContactsPage from 'pages/ContactsPage';
import Main from 'pages/Main';


const ProjectsPage = lazy(() => import('pages/ProjectsPage'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            This is my portfolio website. I am currently working on it. Please
            check back later.
          </p>
          <a
            className="App-link"
            href="https://www.linkedin.com/in/petroshutak/"
            target="_blank"
            rel="noopener noreferrer"
          >
            My LinkedIn Profile
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
