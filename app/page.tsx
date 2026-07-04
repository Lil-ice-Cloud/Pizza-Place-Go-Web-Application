import Header from "@/app/Components/ui/Header/Header"
import Navbar from "@/app/Components/ui/Header/Navbar/Navbar";
import Home from "@/app/Components/ui/Pages/Home/Home";
import Footer from "@/app/Components/ui/Footer/Footer";

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
