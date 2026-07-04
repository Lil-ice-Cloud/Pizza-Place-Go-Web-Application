import Header from "@/Components/ui/Header/Header"
import Navbar from "@/Components/ui/Header/Navbar/Navbar";
import Home from "@/Components/ui/Pages/Home/Home";
import Footer from "@/Components/ui/Footer/Footer";

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
