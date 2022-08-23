import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import NotFound from '../Pages/NotFound';

function Layout() {
    return (
        <div className='layout'>
            <div className="item1"> <Header /> </div>
            <div className="item2">Menu</div>
            <div className='item3'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </div>
           
            <div className="item5">Footer</div>
        </div>
    )
}

export default Layout