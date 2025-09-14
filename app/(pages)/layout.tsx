import Navbar from "../components/navbar";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '@/app/globals.css'

const MainLayout = ({children}:{children:React.ReactNode}) =>{
    return(
        <div className="bg-black text-white px-2 py-4 md:p-5">
            <Navbar />
            {children}
        </div>
    );
}

export default MainLayout;