import "./home.scss"
import Sidebar from "../../components/sidebar/Sidebar" 

const home = () => {
  return (
    <div className="home">
       <Sidebar />
       <div className="homeContainer">
            <div>
                navbar
            </div>
            <div>
                main
            </div>
        </div> 
    </div>
  )
}

export default home