import { useState } from 'react'
import { Header } from './components/Header'
import { Home } from './sections/Home'
import { Photos } from './sections/Photos'
import { About } from './sections/About'
import { Services } from './sections/Services'
import { Quote } from './sections/Quote'
import { Footer } from './components/Footer'
import { WhatsappButton } from './components/WhatsappButton'
import { Ebook } from './sections/Ebook'

import photo1 from "./assets/photo1.jpg";
import photo2 from "./assets/photo2.jpg";
import photo3 from "./assets/photo3.jpg";
import photo5 from "./assets/photo5.png";
import photo4 from "./assets/photo4.png";
import photo6 from "./assets/photo6.png";
import photo7 from "./assets/photo7.png";
import photo8 from "./assets/photo8.png";
import photo9 from "./assets/photo9.png";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Home/>
      <Photos
        photos = {[photo1, photo2, photo3]}
      />
      <About/>
      <Services/>
      <Quote/>
      <Ebook/>
      <Photos
        photos = {[photo4, photo5, photo6, photo7, photo8, photo9]}
        id={"images"}
      />
      
      <WhatsappButton/>
      <Footer/>
    </>
  )
}

export default App
