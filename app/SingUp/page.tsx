import Navbar from "@/Components/ui/Header/Navbar/Navbar";
import Background02 from "@/Components/ui/Live_Background/Background02";
import Footer from "@/Components/ui/Footer/Footer";
import Background from "@/Components/ui/Live_Background/Background";
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