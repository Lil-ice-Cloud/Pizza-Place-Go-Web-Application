import Navbar from "@/Components/ui/Header/Navbar/Navbar";
import Footer from "@/Components/ui/Footer/Footer";
import AuthUI from "@/Components/ui/auth_ui/auth_ui";

export default function SingUpPage() {
    return (
        <>
            <Navbar/>

            <span className="
                 w-full
                 min-h-screen
                 bg-neutral-950
                 ">
                <AuthUI/>
            </span>
            <Footer/>
        </>
    );
}