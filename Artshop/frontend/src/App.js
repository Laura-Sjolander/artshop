import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ArtList from './components/ArtList';
import ArtDetail from './components/ArtDetail';
import About from './pages/About';
import NotFound from './components/NotFound';
import Contact from './pages/Contact';
//import GalleryPage from './components/GalleryPage';
import {NavBar} from './components/NavBar';
import Footer from './components/Footer';

export const App = () => {
return   <BrowserRouter>
             <main>
                <NavBar />
                
                <Routes>
                <Route path="/" exact element={<ArtList />} />
                <Route path="/art/:id" element={<ArtDetail />} />
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/404' element={<NotFound/>}/>
                <Route path='*' element={<Navigate to="/404" replace/>}/> 
            </Routes>
            {/* <Footer /> */}
             </main>
            
        </BrowserRouter>
}

