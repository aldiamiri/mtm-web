import "./App.css";
import CarouselFade from "./Component/Caurosel/Caurosel";
import OurProduct from "./Component/OurProduct/OurProduct";
import Footer from "./Component/Footer/Footer";
import Support from "./Component/Support/Support";

function App() {
  return (
    <div className="App">
      <CarouselFade />
      <OurProduct />
      <Support />
      <Footer />
    </div>
  );
}

export default App;
