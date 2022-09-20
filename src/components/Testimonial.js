import React, {useState} from 'react'
import { BsArrowRightCircle,BsArrowLeftCircle } from 'react-icons/bs'
import './Testimonial.css'


const data = [
  {
    img: "https://resize.elle.fr/original/var/plain_site/storage/images/people/la-vie-des-people/news/le-classement-des-lectrices-de-l-homme-le-plus-sexy-de-l-ete/48254007-1-fre-FR/Le-classement-des-lectrices-de-l-homme-le-plus-sexy-de-l-ete.jpg",
    cmt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quae voluptatibus libero similique omnis dicta cupiditate totam, nostrum esse nam soluta mollitia? Esse vel pariatur cum, quod odit veritatis fugit.",
  },
  {
    img: "https://img.freepik.com/photos-gratuite/homme-affaires-prospere-garde-mains-croisees-expression-satisfaite_273609-16711.jpg?w=2000",
    cmt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quae voluptatibus libero similique omnis dicta cupiditate totam, nostrum .",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTMWstNIpo36b5wB_6jXrslSNxcMUITyNckQ&usqp=CAU",
    cmt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quae voluptatibus libero similique omnis dicta cupiditate totam, nostrum esse nam soluta mollitia? Esse vel pariatur cum, quod odit veritatis fugit.",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/KBJackson.jpg/220px-KBJackson.jpg",
    cmt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quae voluptatibus libero similique omnis dicta cupiditate totam, nostrum esse nam soluta mollitia? Esse vel pariatur cum, quod odit veritatis fugit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quae voluptatibus libero similique omnis dicta cupiditate totam, nostrum esse nam soluta mollitia? Esse vel pariatur cum, quod odit veritatis fugit.",
  },
]
const Testimonial = () => {
 const [slide, setSlide] = useState(0);
 const last = data.length -1;
 const back = () => {
 const first = slide === 0;
 const newind = first ? last : slide -1 
 setSlide(newind);
 }
 const next = () => {
  const nex = slide === last;
  const newin = nex ? 0 : slide + 1;
  setSlide(newin);
 }

 
  return (
    <>
 <h1 className='titlecp'>Commentaire</h1>
    <div className='tsMain'>
         <div className='testi'>
         <div className="pers">
         <img src={data[slide].img} alt="avatar" /></div>
         <div className='cmt'>
         <p> {data[slide].cmt} </p>
         </div>
         </div>
           <div className="slidbtn">
          <BsArrowLeftCircle onClick={back}/>
          <BsArrowRightCircle onClick={next}/>
          </div>
    </div>   </>
  )
}

export default Testimonial