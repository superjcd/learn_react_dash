import "./sidebar.scss"
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
export const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top">
            <div className="logo">
                <span>React Dashboard</span>
            </div>
        </div> 
        <hr />
        <div className="center">
            <ul>
                <p className="title">main</p>
                <li>
                    <DashboardIcon className="icon"/>
                    <span>dashboard</span>
                </li>
                <p className="title">lists</p>
                <li>
                  <PersonOutlineIcon className="icon" />
                  <span>users</span>
                </li>           
                <li>
                  <StoreIcon className="icon" />
                  <span>products</span>
                 </li>
                 <li>
            <CreditCardIcon className="icon" />
            <span>orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>delivery</span>
          </li>
          <p className="title">useful</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>notifications</span>
          </li>
          <p className="title">service</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>system health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>settings</span>
          </li>
          <p className="title">user</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>                
            </ul>
        </div>
        <div className="bottom">bottom</div>
    </div>
  
    )
}

export default Sidebar
