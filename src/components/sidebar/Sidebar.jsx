import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import GppMaybeOutlinedIcon from '@mui/icons-material/GppMaybeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Admin Panel</span>
       
      </div> 
       <hr/>
      <div className="center">
        <ul>

          <p className="title">MAIN</p>
          <li><DashboardIcon className="icon" /><span>Dashboard</span></li> 
          <p className="title">LISTS</p>
          <li><PersonOutlineOutlinedIcon className="icon"/><span>Users</span></li> 
          <li><ProductionQuantityLimitsIcon className="icon"/><span>Products</span></li>
          <li><ShoppingBasketOutlinedIcon className="icon"/><span>Orders</span></li>
          <li><DeliveryDiningOutlinedIcon className="icon"/><span>Delivery</span></li>
          <p className="title">USEFUL</p>
          <li><AppsOutlinedIcon className="icon"/><span>Stats</span></li>
          <li><NotificationsOutlinedIcon className="icon"/><span>Notification</span></li>
          <p className="title">SERVICE</p>
          <li><HealthAndSafetyOutlinedIcon className="icon"/><span>System Health</span></li>
          <li><GppMaybeOutlinedIcon className="icon"/><span>Logs</span></li>
          <li><SettingsOutlinedIcon className="icon"/><span>Settings</span></li>
          <p className="title">USER</p>
          <li><AccountBoxOutlinedIcon className="icon"/><span> Profile</span></li>
          <li><LogoutOutlinedIcon className="icon"/><span>Logout</span></li>
        </ul>

      </div>
      <div className="bottom"> 
      <div className="colorOption"></div>
      <div className="colorOption"></div>
      
      </div>
    </div>
  );
};

export default Sidebar;
