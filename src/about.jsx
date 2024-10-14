import Programs      from './programs.jsx';
import Advantages    from './advantages.jsx';
import AboutSteps    from './aboutSteps.jsx';
import AboutCompany  from './aboutCompany.jsx';

const About= ()=>{
  return(
    <div className='about'>
    <Advantages title = "<strong class='blue'>Why we are </strong>best from others?"/>
    <AboutCompany />
    <AboutSteps />
    <Programs />
    </div>
  )
}

export default About;