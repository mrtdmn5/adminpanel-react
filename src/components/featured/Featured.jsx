import "./featured.scss";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title"> Total Revune</h1>
        <MoreVertOutlinedIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
              value={70}
              text=%{70}
        </div>
        <p className="tite"> Total sales </p>
        <p className="amount"> 420$</p>
        <p className="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult positive">
            <KeyboardArrowDownOutlinedIcon fontSize="small" />
              <div className="resultAmount">$15.5k</div>

            </div>


          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult">
            <KeyboardArrowDownOutlinedIcon fontSize="small" />
              <div className="resultAmount">$15.5k</div>

            </div>


          </div>
          <div className="item">
            <div className="itemTitle">Last Mounth</div>
            <div className="itemResult">
            <KeyboardArrowDownOutlinedIcon fontSize="small" />
              <div className="resultAmount">$15.5k</div>

            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
