import  Socials     from './socials.jsx';
import  FooterMenu  from './footerMenu.jsx';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3 className="footer-title">Education</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      <Socials />
      </div>

      

      <FooterMenu />
    </footer>
  );
}

export default Footer;