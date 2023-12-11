import Home from './component/home/Home'
import {Route, Routes} from 'react-router-dom'
import './App.css'
import NavigationBar from './component/NavigationBar'
import Service from './component/service/Service'


const App = () => {

  return (
    <>
    <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/service' element={<Service />} />
      </Routes>
      {/* <div className='grid'>
        {home.map(({image}) => (
          <Home
          image={image} />
        ))}

      </div> */}

     
    </>
  )
}

export default App
