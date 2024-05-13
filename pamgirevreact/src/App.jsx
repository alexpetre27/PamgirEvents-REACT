import React from "react"
import Sidenav from '/components/Sidenav'
import MainPage from '/components/MainPage'
import PhotoGallery from '/components/PhotoGallery'
import VideoGallery from '/components/VideoGallery'
import Offers from '/components/Offers'
import Contact from '/components/Contact.jsx'

export default function App(){
  return(
    <div>
      <Sidenav/>
      <MainPage/>
      <PhotoGallery/>
      <VideoGallery/>
      <Offers/>
      <Contact/>
    </div>
  );
}