import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Logo from "../../assets/SVGs/Logo.jsx";
const locations = [
  {
    text1: "CoLabs Coworking 1/306",
    text2: "Albert St, Brunswick",
    phone: "(03) 9111 2399",
  },
  {
    text1: "17/306 Albert St,",
    text2: "Brunswick",
    phone: "(03) 9111 2399",
  },
  {
    text1: "17/306 Albert St,",
    text2: "Brunswick",
    phone: "(03) 9111 2399",
  },
  {
    text1: "2 Acacia Place, Notting",
    text2: "Hill",
    phone: "(03) 9111 2399",
  },
];

const menus = [
  "Services",
  "Privacy Policy",
  "Our Principles",
  "Terms and Conditions",
  "About",
  "Comunity",
  "Contact",
  "© 2024 Colabs",
];

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__acknowledgement">
        <p>
          Co-Labs Melbourne respectfully acknowledges the Traditional Custodians
          of the land on which we operate our business – the Boon Wurrung and
          Wurundjeri peoples of the Kulin Nation.
        </p>
      </div>
      <div className="footer__main">
        <div className="footer__locations">
          {locations.map(({ text1, text2, phone }, index) => (
            <div key={index}>
              <p>{text1}</p>
              <p>{text2}</p>
              <p>{phone}</p>
            </div>
          ))}
        </div>
        <nav className="footer__menus">
          {menus.map((menu) => (
            <p key={menu}>{menu}</p>
          ))}
        </nav>
        <div className="footer__bottom">
          <div>
            <FaFacebook size={24} /> <FaInstagram size={24} />{" "}
            <FaLinkedin size={24} /> <FaTwitter size={24} />
          </div>
          <div>
            <Logo fill="#FFFFFF" width={160} />
          </div>
        </div>
      </div>
    </footer>
  );
};
