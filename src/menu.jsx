const menuItems = [
  { href: '#home',     text: 'Home',     isSelected: true },
  { href: '#teachers', text: 'Teachers', isSelected: false },
  { href: '#courses',  text: 'Courses',  isSelected: false },
  { href: '#pricing',  text: 'Pricing',  isSelected: false },
  { href: '#aboutus',  text: 'About Us', isSelected: false },
];

{/*const MenuItem = ({ href, text, isSelected }) => {
  return (
    
  );
}; */}

const Menu = ({ items }) => {
  return (
    <nav className="menu">
      {items.map((item, index) => (
        <a
        className={`menu-item ${item.isSelected ? 'menu-item-selected' : ''}`}
        href={item.href}
        key={index}
      >
        {item.text}
      </a>
      ))}
    </nav>
  );
};




const HeaderMenu = () => {
  return (
    <div>
      <Menu items={menuItems} />
    </div>
  );
};

export default HeaderMenu;
