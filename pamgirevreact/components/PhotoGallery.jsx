import React from "react";

export default function PhotoGallery(){
    return(
        <div id="photogallery">
            <div className="w-full h-screen bg-gslate-200 bg-white/90" >
                <h1 className="text-center p-8 text-2xl font-bold text-slate-800 w-full" >Galerie Foto</h1>
            </div>
            <GalleryItem/>
        </div>
    );
    
}