import About from "./about"
import HOME from "./component/Home"
import Header from "./Header"
 import { BrowserRouter,Routes, Route } from "react-router-dom"
import store from "./utils/store"
import { Provider } from "react-redux"
function App() {
 

  return (
    <Provider store={store}>
      <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Header/>}/>
      
        <Route path="/home" element={<HOME/>}/>
        <Route path="/about" element={<About/>} />
    </Routes>
    </BrowserRouter>
    </Provider>
    
   
  )
}

export default App
