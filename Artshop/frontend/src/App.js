import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ArtList from './components/ArtList'
import ArtDetail from './components/ArtDetail'
import NotFound from './components/NotFound';
import GalleryPage from './components/GalleryPage'
import {NavBar} from './components/NavBar'

export const App = () => {
return   <BrowserRouter>
             <main>
                <NavBar />
                <Routes>
                <Route path="/" exact element={<ArtList />} />
                <Route path="/art/:id" element={<ArtDetail />} />
                <Route path='/404' element={<NotFound/>}/>
                <Route path='*' element={<Navigate to="/404" replace/>}/> 
            </Routes>
             </main>
            
        </BrowserRouter>
}

