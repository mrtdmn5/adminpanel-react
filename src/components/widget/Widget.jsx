import "./widget.scss"
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
const Widget = ({type}) => {

    let data;
    const amount=100;
    const diff=20;

    switch (type){
        case "user":
        data={
            title:"USER",
            isMoney: false,
            link:"See all users",
            icon:<PersonOutlinedIcon className="icon" style={{color:"green", backgroundColor:" rgba(0, 128, 0, 0.200)"}}/>,
            
        };
        break;
        case "order":
        data={
            title:"ORDER",
            isMoney: false,
            link:"See all orders",
            icon:<ShoppingCartCheckoutOutlinedIcon className="icon" style={{color:"purple", backgroundColor:"rgba(128, 0, 128, 0.200)"}}/>,
            
        };
        break;
        case "earning":
        data={
            title:"EARNING",
            isMoney: true,
            link:"View all earnings",
            icon:<MonetizationOnOutlinedIcon className="icon" style={{color:"blue", backgroundColor:"rgba(0, 0, 255, 0.200)"}}/>,
            
        };
        break;
        case "balance":
        data={
            title:"BALANCE",
            isMoney: true,
            link:"See details",
            icon:<BalanceOutlinedIcon  style={{color:"red", backgroundColor:"rgba(255, 0, 0, 0.200)"}} className="icon" />,
            
        };
        break;
        default:
            break;
    }




  return (
     
    <div className="widget">
        <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && "$"}{amount}</span>
        <span className="link">{data.link}</span>


        </div>
        <div className="right">
            <div className="percentage positive ">
                <KeyboardArrowUpOutlinedIcon />
                {diff} %
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget