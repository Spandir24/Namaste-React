//Header component


const Header = () => {
  return (
    <div className="header">
      {/*LOGO*/}
      <div className="logo-container">
        <img
          className="logo"
          src="https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Editable-Photoshop-Food-Logo-Design-PNG-Transparent.png"
          height="50px"
          width="50px"
        />
      </div>

      {/*NAV-ITEMS*/}
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
