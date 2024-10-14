import React      from 'react';
import ReactDOM   from 'react-dom/client';
import Header     from './header.jsx';
import Main       from './main.jsx';
import Statistics from './statistics.jsx';
import About      from './about.jsx';
import Reviews    from './reviews.jsx';
import Footer     from './footer.jsx';
import './index.scss';
import 'swiper/css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Header />
    <Main />
    <Statistics />
    <About />
    <Reviews title ="<strong class='blue'>What </strong> our students Say"/>
    <Footer />
  </div>
);

