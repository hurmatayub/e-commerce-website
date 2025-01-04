
import Slide from "./components/Slide";
import Topselling from "./components/Topselling";
import Footer from "./components/Footer";
import Products from "./components/products";
import MainHeader from "./components/MainHeader";

export default function Home() {
  return (
    <main>
    <MainHeader />
    <Slide />
    <Products />
     <Topselling />
     <Footer />
   </main>
  );
}
