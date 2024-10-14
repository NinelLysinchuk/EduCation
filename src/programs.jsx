import { programsTop, cards } from "./programsData";

 const Programs = () => {

  return (
    <div className='ourPrograms-container' id='courses'>
      <div className='ourPrograms'>
        <div className='ourPrograms-header'>
          <div className='programs-title' dangerouslySetInnerHTML={{ __html: programsTop.title}}></div>
          <div className='programs-descripton'>{programsTop.description}</div>
        </div>
        <div className='programs'>
          {cards.map((card, index) => (
            <div className="program" key={index}>
              <img src={card.image} className='program-img'/>
              <h2 className='program-title'>{card.title}</h2>
              <p className='program-description'>{card.description}</p>
              <button className='program-more'>{card.button}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Programs;