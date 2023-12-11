import './NavigationBar.css'

const NavigationBar = () => {
  return (
    
    <div>
        
        <header data-bs-theme="dark" id='nav'>
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-" id='navbar'>
      <div className="container-fluid">
        <a className="navbar-brand" href="#"></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/service">Service</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/reward">Reward</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/community">Community</a>
            </li>
            
          </ul>
        </div>
      </div>
      
    </nav>
  </header>
    </div>
  )
}

export default NavigationBar