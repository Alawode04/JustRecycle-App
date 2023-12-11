
import "../Home.css"
import EmailForm from "../form/EmailForm"
import Footer from "../footer/Footer"

const Home = () => {

  
  return ( 
    <>
    <div className="general">
      <div className='container'>
       <div className="home">
          <h6>WORKING SINCE 2020</h6>
            <h1>
            Nigeria's
            Leading 
            Plastic
            Recycler
            </h1>
        </div>
        <div className="rectangle"></div>
    
          <div id="box">
            <div className="box1">
            <i class="fa fa-recycle"></i>
                <h5>Waste Recycle</h5>
                <p>2,450,642</p>
            </div>
             
            <div className="box2">
            <i class="fa fa-money-bill"></i>
              <h5>Money For Charity</h5>
              <p>$6,089,553</p>
             </div>
            </div>
            <div className="btn">
              <button className="btn1">Location</button>
              <button className="btn2">About Us</button>
            </div>  
      </div>
      <img src="https://wordpress.wbur.org/wp-content/uploads/2019/09/GettyImages-1072467780-1000x667.jpg"></img>         
    </div>


    <div className="section2">  
      <img src="https://c8.alamy.com/comp/2CNKK8F/greenyellow-redblue-color-plastic-garbage-recycle-bin-in-public-place-background-of-trash-paper-glass-and-plastic-waste-garbage-garbage-can-bin-2CNKK8F.jpg" alt="" id="image2"/> 
        <img src="https://template110018.motopreview.com/mt-demo/110000/110018/mt-content/uploads/2020/07/mt-2067-home-img-3.jpg" alt="" id="image1"/>
        
      <div id="section3">
        <p id="sub-head">OVERVIEW</p>
        <h2 id="sec3">
              Just-Recycle Plastic Recycling Company
        </h2>
        
    
        <p id="our-info">
        Just-Recycle Company, based in Lagos, Nigeria,  
        specializes in plastic recycling and
         commercial plastics recycling. Our
          main strength and point is in the purchase 
          and resale of plastic materials in 
          the secondary market. Our company has built
           a reputation on a spirit for
            developing new markets and technologies
             to meet tomorrow’s plastic
              recycling demands. We recycle all
               grades of plastic, and purchase raw 
               plastic scrap in any shape or form. We offer toll 
                grinding services and specialize in used
                 plastic pallets, bins, totes, and boxes but plastics mostly.
                 We transform your plastic scrap and plastic
                  film into useful material that can be used
                   to make a huge variety of products or money, from
                  different materials.
                  Our focus is on the provision of sustainable waste management solutions in Lagos State and Nigeria
                   using an approach based on best practices for environmental resource
                    management found in the leading economies of Australia and Europe.
        We believe plastic recycling is an important and needed service especially in Lagos state and Nigeria as a whole,
         and we are proud to call ourselves “the best in the industry” and our GOAL...  ZERO WASTE IN LAGOS.
        </p>

        <button id="button">Learn More..</button>
        </div>
      </div>


        <div className="section4">
            <img src="https://wastepoint.com.ng/safe/uploads/2014/08/side_about2.jpg" alt="" />
          <div className="txt">
          <h1>Recycling Services:</h1>
            <p>We recycle all grades of plastic, and purchase raw plastic scrap
               in any shape or form. We offer toll 
               grinding services and specialize in used plastic pallets, bins,
                 and boxes. Our recycling division provides grinding,
                 sorting, and bailing for an array of plastic materials and we also handle many types of plastic..
                 Our company provides prompt and effective plastic recyclation
                 in Lagos State, Nigeria.
                  </p>
              <div id="rectangle"></div>
          </div> 
        </div>
         <Footer />
        <EmailForm />
    
   
    </>
  )
}

export default Home