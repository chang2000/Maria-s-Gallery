import React, {useEffect, useState} from 'react';
import './App.css';
import Info from './Info/Info.jsx'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/scss/image-gallery.scss"

const App = () => {
  const [images, setImages] = useState([])
  useEffect(() => {
    composeSrc()
  }, [])

  const composeSrc = () => {
    let tmpList = []
    for (let i = 0; i < 41; i++) {
      let tmpObj = {
        original: 'https://raw.githubusercontent.com/chang2000/blog-image-host/master/site-drawing/0' + i +'.png',
        thumbnail: 'https://raw.githubusercontent.com/chang2000/blog-image-host/master/site-thumbs/0' + i +'.jpg',
        // original: './assets/site-drawing/0' + i +'.png',
        // thumbnail: './assets/site-thumbs/0' + i +'.jpg',
      } 
      tmpList.push(tmpObj)
    }
    setImages(tmpList)
  }
  return (
    <div>
      <Info />
      <ImageGallery items={images} />
    </div>
  )
}

export default App;
