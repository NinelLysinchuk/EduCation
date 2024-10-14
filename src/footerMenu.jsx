import  footerMenuData  from "./footerMenuData"

 const FooterMenu = () => {
  return (
    <div className="footerMenu">
      {footerMenuData.map((menu, index) => (
        <div key={index} className="column">
          <h3>{menu.title}</h3>
          <ul>
            {menu.links.map((link, linkIndex) => (
              <li key={linkIndex}>
                <a href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterMenu;