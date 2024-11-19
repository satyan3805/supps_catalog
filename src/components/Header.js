import { APP_LOGO } from "../util/constants";

const Header = () => (
  <div className="header-div">
    <div className="logo">
      <img
        className="logo-img"
        src={require("../images/ipf_supps_logo.jpg")}
        width={"300px"}
        height={"150px"}
        alt={"IPF Supplements"}
      />
    </div>
  </div>
);

export default Header;
