import { aboutStepsLeft, steps } from "./aboutStepsData";

 const AboutSteps = () => {
  return (
    <div className='about-steps-container'>
      <div className='about-steps-left'>
        <img src={aboutStepsLeft.bg} className='about-steps-background' alt={aboutStepsLeft.alt} />
        <img src={aboutStepsLeft.img} className='about-steps-img' alt={aboutStepsLeft.imgAlt} />
      </div>
      
      <div className='about-steps'>
        <div className='about-steps-title'>{aboutStepsLeft.title}</div>
        <div className='about-steps-description'>{aboutStepsLeft.description}</div>
        <div className='steps'>
          {steps.map((step, index) => (
            <div key={index} className='step'>
              <span className='step-number'>{step.number}</span>
              <span className='step-text'>{step.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSteps;
