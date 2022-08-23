import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from '../Pages/Home';
import About from '../Pages/About';
import NotFound from '../Pages/NotFound';
import Sidebar from './Sidebar';

function Layout() {
    return (
        <div className='layout'>
            <div className="lay-header"> <Header /> </div>
            <div className="lay-sidebar"> <Sidebar/></div>
            <div className='lay-main'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </div>
            <div className="lay-space"></div>
            <div className="lay-footer"><Footer/></div>
        </div>
    )
}

export default Layout