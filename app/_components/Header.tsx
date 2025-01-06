import Logo from "./Logo";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="border-b border-primary-900 px-8 py-5">
      <div className="flex justify-between items-center">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
