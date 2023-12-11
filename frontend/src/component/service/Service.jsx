import EmailForm from '../form/EmailForm'
import '../Service.css'
import Footer from '../footer/Footer'

const Service = () => {

  return (
  
    <div className='my-service'>
        <div className='text'>
            <h1 id='service'>
              Our Recycling Service
            </h1>
            <div className='rectangle2'></div>
            <img src="https://i0.wp.com/startuptipsdaily.com/wp-content/uploads/2016/02/top-3-recycling-business-ideas-and-opportunities.jpg?fit=620%2C334&ssl=1" alt="recycling process" />
        </div>   
        
        <div className='service-info'>
            <img src="https://startuptipsdaily.com/wp-content/uploads/2016/02/how-to-start-a-plastic-recycling-business-in-nigeria.jpg" alt="" id='service-img'/>
            <h2>Recycling Services for Your Business</h2>
            <p className='service-txt'>We recycle all grades of plastic, and purchase raw plastic scrap in any shape or 
              form, regrind and virgin resin. We offer toll grinding services and specialize in 
              used plastic pallets, bins, totes, and boxes. Our recycling division provides grinding, 
              sorting, and bailing for an array of plastic materials. Our main goal is to create 
              recycling programs, toll grinding services and regrind plastic programs to help maximize
               the value of our customer's scrap.</p>
        </div>
      <div className='reachUs'>
        <h2>Call us toll-free at:</h2>
        <h5>090 3428 6989</h5>
        <h5>080 8377 1511</h5>
       
        <h2>Our E-mail</h2>
       <p>justrecycle@gmail.com</p>
      </div>
      <Footer />
      <EmailForm />
    </div>
    
  )
}

export default Service      