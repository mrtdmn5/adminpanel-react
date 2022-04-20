import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import CropSquareOutlinedIcon from "@mui/icons-material/CropSquareOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Serach..." />
          <SearchOutlinedIcon />
        </div>

        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <DarkModeOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <CropSquareOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsActiveOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <div className="counter">1</div>
            <ChatBubbleOutlineOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <MenuOutlinedIcon className="icon" />
          </div>

          <div className="item">
            <img
              alt=""
              src="https://scontent.fmmx3-1.fna.fbcdn.net/v/t1.6435-9/103641167_1674987575999443_4596352907825489416_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=PqnFK5nEvosAX-oQId3&_nc_ht=scontent.fmmx3-1.fna&oh=00_AT9F2Zv8Vwt_KuZJdCqnCe4fVUcNvveUM8EDDz8e7kuO_w&oe=627EFA7A"
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
