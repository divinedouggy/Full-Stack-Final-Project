import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from '../Pages/Home';
import About from '../Pages/About';
import NotFound from '../Pages/NotFound';
import Sidebar from './Sidebar';
import ZooAnimal from '../Pages/ZooAnimal';
import Posts from '../Pages/Posts';
import Post from '../Pages/Post';
import PostCreate from '../Pages/PostCreate';

function Layout() {
    return (
        <div className='layout'>
            <div className="lay-header"> <Header /></div>
            <div className='headerbg'> </div>
            <div className="lay-sidebar"> <Sidebar /></div>
            <div className='lay-main'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/posts' element={<Posts />} />
                    <Route path='/posts/:id' element={<Post />} />
                    <Route path='*' element={<NotFound />} />
                    <Route path='/zooanimal' element={<ZooAnimal />} />
                    <Route path='/create-post' element={<PostCreate />} />
                </Routes>
            </div>
            <div className="lay-space"></div>
            <div className="lay-footer"><Footer /></div>
        </div>
    )
}

export default Layout