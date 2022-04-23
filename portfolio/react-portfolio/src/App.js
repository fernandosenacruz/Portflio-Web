/* 
  https://www.youtube.com/watch?v=G-Cr00UYokU
*/
import './App.css';
import About from './components/about/About';
import Comment from './components/comments/Comment';
import Contact from './components/contacts/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';

const App = () => {
  return (
    <>
     <Header />
     <Nav />
     <About />
     <Experience />
     <Comment />
     <Contact />
     <Footer />
    </>
  );
}

export default App;
