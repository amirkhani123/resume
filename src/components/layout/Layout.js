import DarkMod from "../modules/DarkMod";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <>
      <Header />
      <DarkMod/>
      <div className="min-h-screen "> {children}</div>
      <Footer />
    </>
  );
}

export default Layout;
