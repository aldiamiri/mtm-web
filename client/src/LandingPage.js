import "./App.css";
import CarouselFade from "./Component/Caurosel/Caurosel";
import OurProduct from "./Component/OurProduct/OurProduct";
import Footer from "./Component/Footer/Footer";
import Support from "./Component/Support/Support";

function LandingPage() {
  return (
    <div className="LandingPage">
      <CarouselFade />
      <OurProduct />
      <Support />
      <Footer />
    </div>
  );
}

export default LandingPage;
