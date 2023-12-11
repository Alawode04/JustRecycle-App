import '../Footer.css'

const Footer = () => {
  return (
    <>
        <footer>
        <div className="conclusion">
          <div>
            <h2>JUST-RECYCLE</h2>

            <p className="page-head">
            We are a reliable and fast-growing outsourcing call center company
            that works with clients from anywhere within and outside Lagos, providing the 
            professional services of a data enrichment, direct email marketing, 
              lead generation, market research.
            </p>
            </div>

            <div className="info">
            <div id="location">
            <i className="fa fa-map-marker"></i>
            <p>GoMyCode, Yaba Hackerspace, Nigeria</p>
            </div>

            <div id="time">
                <i className="fas fa-clock"></i>
                <p>Mon-Fri: 09:00am to 17:00pm. Sat-Sun: CLOSED</p>
            </div>

            <div id="phone">
                <i class="fa fa-phone"></i>
                <p>080 8377 1511</p>
            </div>
            </div> 

            <div id="text">
                <h2>Sign up for updates</h2>
            <form id='my-form'>
              <div className="mb-3">
                  <input type="email" className="form-control" placeholder='Your Email*'/>
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>

            <button type="submit" className="btn btn-primary" id='sub-btn'>Subscribe</button>
          </form>
                
            </div>
            
        </div>
      </footer>
    </>
  )
}

export default Footer