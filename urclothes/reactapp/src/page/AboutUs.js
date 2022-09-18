import React from 'react';
import Navbar from '../components/navbar';
import Footer from './footer';
import { BsLinkedin } from 'react-icons/bs';
import { MdWebAsset } from 'react-icons/md';
import Gabriel from '../assets/Gabriel.jpg';
import Lino from '../assets/Lino.jpeg';
import Nicolas from '../assets/Nicolás.jpg';
import Raphael from '../assets/raphaelPNG.png';
import Paulo from '../assets/Paulo.jpg';
import Pablo from '../assets/Pablo.jpg';


const contactInfo = [
{name:"Gabriel Torres", linkedin: "https://www.linkedin.com/in/gabriel-torres-15a82714b/", portafolios: "", pic: Gabriel, rol: "Front-End Developer", description: ""},
{name:"Raphael Richardson", linkedin: "https://www.linkedin.com/in/raprichardson", portafolios: "https://raphaelrichardsonb.web.app/", pic: Raphael, rol: "Front-End Developer", description: ""},
{name:"Lino Cruz", linkedin: "", portafolios: "https://linocruz.github.io/my_web_page/", pic: Lino, rol: "Back-End Developer", description: ""},
{name:"Nicolás Basualdo", linkedin: "linkedin.com/in/nicobasualdocornet", portafolios: "https://nbcornet.github.io/portfolio/", pic: Nicolas, rol: "Back-End Developer", description: ""},
{name:"Paulo Nievas", linkedin: "https://www.linkedin.com/in/paulo-facundo-gaston-nievas/", portafolios: "", pic: Paulo, rol: "Back-End Developer", description: ""},
{name:"Pablo Chiappone", linkedin: "https://www.linkedin.com/in/pablo-chiappone-9999131a2/", portafolios: "https://github.com/paulochiappone/portfolio-web", pic: Pablo, rol: "Front-End Developer", description: ""}
];


export const AboutUs = () => {
  return (
    <>
    <Navbar/>
    <div className='container'>
      <h1>About us</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Proin et erat sed ligula dictum consectetur eu ac ante. Nulla augue arcu, molestie vel tempor in, congue quis lacus. Vivamus sit amet lacinia
      erat. Vivamus convallis blandit dui. Nunc gravida, elit pulvinar facilisis vulputate, mi ante imperdiet dui, quis cursus dui
      nibh quis erat. Aenean porta sem at sagittis tristique. In et nisl enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      In tincidunt enim vel ornare faucibus. Quisque eleifend, enim sed tristique efficitur, nisl eros tempus magna, quis placerat nunc velit et mi.
      Vivamus molestie velit a laoreet sollicitudin. Quisque lorem elit, placerat vitae gravida vel, pharetra vestibulum orci.</p>  
      <p> Sed congue, neque a mattis elementum, tellus elit accumsan leo, ornare convallis tellus tellus a orci. Proin tempor lobortis tristique. Morbi risus tellus, luctus vitae aliquet non, blandit vitae ex. Nullam finibus, nunc sed tincidunt dapibus, mauris augue gravida nisl, eu tempus orci urna id quam. Proin a arcu vitae libero sagittis ultrices sagittis quis dui. Aliquam vitae dignissim augue, ut faucibus magna. Donec scelerisque auctor erat, a vehicula purus. In et sagittis odio. Fusce velit neque, commodo in varius vel, blandit at libero. In imperdiet justo a condimentum tempor. Vestibulum at sodales augue, vel interdum justo. </p>
      <h2>Our team</h2>
      <div className="cardContainer d-flex justify-content-center justify-content-md-between align-items-center w-100 flex-wrap" > {/*Container of cards*/}
        {contactInfo.map((item) => {
          return (
            <div className='cardBox mb-3'>
              <div className="w-100 imgContain">
              <img src={item.pic /*`${item.pic}`*/} alt={`${item.name} pic`} />
              </div>
              <h3 className='mb-0'>{item.name}</h3>
              <span className='d-block fw-semibold'>{item.rol}</span>
              <p className='text-center mt-2 mb-4 mx-4'>{item.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Proin et erat sed ligula dictum consectetur eu ac ante. Nulla augue arcu, molestie vel tempor in, congue quis lacus.</p>
              
              <div className='d-flex align-items-center justify-content-between mb-4' style={{width: "20%"}} >
              <a href={`${item.linkedin}`}> 
                <BsLinkedin size={35} />
              </a>
              <a href={`${item.portafolios}`}>
                <MdWebAsset size={40}/>
              </a>
              </div>
            </div>
          )
        })}

      </div>
    </div>
    <Footer/>
    </>
  )
}
