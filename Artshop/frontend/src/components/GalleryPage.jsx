import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import ArtList from './ArtList'
import ArtDetail from './ArtDetail'
import NotFound from './NotFound';


const GalleryPage = () => {

    return (
        <main>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<ArtList />} />
                    <Route path="/art/:id" element={<ArtDetail />} />
                    <Route path='/404' element={<NotFound />} />
                    <Route path='*' element={<Navigate to="/404" replace />} />
                </Routes>
            </BrowserRouter>
        </main>
    )
}

export default GalleryPage