import Logo       from './logo.jsx';
import HeaderMenu from './menu.jsx';
import AuthBlock  from './authBlock.jsx';


const Header = () => {
  return (
    <header className="header">
      <Logo />
      <HeaderMenu />
      <AuthBlock />
    </header>
  );
};

export default Header;