import {React} from "react";
import Images from '../images/Images'
import GalleryItem from "./GalleryItem"; 

export default function PhotoGallery(){
  const photo=[
    {  
    source:Images.image1,
    figcaption:'asdfasd1',
    },
    {  
    source:Images.image2,
    figcaption:'asdfasd2',
    },
    {  
    source:Images.image3,
    figcaption:'asdfasd3',
    },
    {  
    source:Images.image4,
    figcaption:'asdfasd4',
    },
    {  
    source:Images.image5,
    figcaption:'asdfasd5',
    },
    {  
    source:Images.image6,
    figcaption:'asdfasd6',
    },
   
  ];
  return(
    <div className="m-auto p-4 min-h-[100vh] flex justify-center items-center">
      <ul className="list-none m-0 p-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 max-w-[100%] w-[70rem]"> 
        {photo.map((photo, index) => (
          <li key={index}>
            <GalleryItem src={photo.source} figcaption={photo.figcaption} className="m-0 relative overflow-hidden"/>
          </li>
        ))}
      </ul>
    </div>   
  );
}