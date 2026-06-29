import Header from "@/app/Componentes/ui/Header/Header"
import Home from "@/app/Componentes/ui/Pages/Home/Home";
import Navbar from "@/app/Componentes/ui/Header/Navbar/Navbar";
import Footer from "@/app/Componentes/ui/Footer/Footer";

export default function MainPage() {
  return (
      <>
       <Header/>
          <Navbar/>
          <Home/>
          <Footer/>
      </>
  );
}
