import Link from "next/link";

import { FaLinkedinIn, FaFacebook, FaInstagram,Fa500Px } from "react-icons/fa";

const socials = [
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/ji-yang-zhang-668880262/" },
  { icon: <FaFacebook />, path: "https://www.facebook.com/profile.php?id=100010918806565" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/xjiyang_zhangx/?hl=cs" },
  { icon: <Fa500Px />, path: "https://500px.com/p/jiyang20030105?view=photos" },



];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
