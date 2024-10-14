import { advantagesTop , advantages } from "./advantagesData"

  const Advantages = ({title}) => {
  return(
    <div className='advantages'>
      <div className='advantages-text'>
        <span className='advantages-title' dangerouslySetInnerHTML={{ __html: title}}></span>
        <span className='advantages-description'>{advantagesTop.description}</span>
      </div>
      <div className='advantages-cards'>
        {advantages.map((advantage, index) => (
          <div key={index} className='advantages-card'>
            <img src={advantage.src} className='advantages-img'/>
            <span className='advantages-card-title'>{advantage.title}</span>
            <span className='advantages-card-description'>{advantage.description}</span>
          </div>
        ))}
    </div>
  </div>
  )
}

export default Advantages;