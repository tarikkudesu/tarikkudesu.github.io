import "./App.css";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <Logo />
      <Profile />
    </header>
  );
}

function Logo() {
  return (
    <a href="#" className="logo">
      <img src="logowhite.png" alt="" className="logo-image" />
    </a>
  );
}

function Profile() {
  return (
    <a href="https://github.com/tarikkudesu/" className="profile">
      <img
        src="https://avatars.githubusercontent.com/u/148579319?s=96&v=4"
        alt=""
        className="profile-image"
      />
    </a>
  );
}

export default Header;
