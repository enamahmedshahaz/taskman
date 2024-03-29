import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='max-w-[1200px] mx-auto'>
                <Outlet> </Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;