import "./home.scss"
import Sidebar from "../../components/sidebar/Sidebar" 
import Navbar from "../../components/navbar/Navbar"
const home = () => {
  return (
    <div className="home">
       <Sidebar />
       <div className="homeContainer">
            <div>
              <Navbar/>
            </div>
            <div>
                main
            </div>
        </div> 
    </div>
  )
}

export default home