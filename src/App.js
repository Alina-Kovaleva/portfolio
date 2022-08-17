import { About, Footer, Header, Skills, Work, Testimonial } from './container';
import { Navbar } from './components';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
      <Testimonial />
    </div>
  );
}

export default App;
