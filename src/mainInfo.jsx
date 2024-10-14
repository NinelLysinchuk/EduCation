import { mainInfoData } from "./mainInfoData";

const MainInfo = ({ title }) => {
  return (
    <div className='mainLeft'>
      {/* Main Information Section */}
      <div className="mainInfo">
        <h1 className='mainInfo-title' dangerouslySetInnerHTML={{ __html: title }}></h1>
        <h5 className='mainInfo-description'>{mainInfoData.description}</h5>
      </div>
      
      {/* Main Buttons Section */}
      <div className='main-buttons'>
        <button className='main-button-join'>{mainInfoData.buttonText}</button>
        <img className='main-button-howItWorks' src={mainInfoData.imageSrc} alt={mainInfoData.imageAlt} />
      </div>
    </div>
  );
};

const Info = () => {
  return (
    <MainInfo title={mainInfoData.title} />  
  );
};

export default Info;
