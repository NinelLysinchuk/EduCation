import  socialsData  from "./socialsData";

 const Socials = () => {
  return (
    <div className="social-links">
      {socialsData.map((social, index) => (
        <a key={index} href={social.href} target="_blank" rel="noopener noreferrer">
          <img src={social.src} alt={social.alt || 'Social icon'} />
        </a>
      ))}
    </div>
  );
};

export default Socials;
