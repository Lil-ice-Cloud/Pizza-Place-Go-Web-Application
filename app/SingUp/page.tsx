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
                <div className="
                pt-24
                main-h-screen
                flex
                items-center
                justify-center
                ">
                    <AuthUI/>
                </div>
            </span>
            <Footer/>
        </>
    );
}