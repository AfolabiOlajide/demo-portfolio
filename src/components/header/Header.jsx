/* eslint-disable react/jsx-no-target-blank, jsx-a11y/anchor-is-valid, jsx-a11y/img-redundant-alt, no-unused-vars */

import { IoMdArrowDown } from "react-icons/io";
import me from "../../assets/avatar.jpg";
import CTA from "./CTA";
import "./Header.css";
import HeaderSocials from "./HeaderSocials";
// import me from "../../assets/avtr2.jpg";
// import me from '../../assets/main2.png';

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Afolabi Olajide Samuel</h1>
                <h5 className="text-light">Software Engineer (Front-end)</h5>
                <CTA />
                <div className="header__lower_section">
                    <HeaderSocials />
                    <div className="me">
                        <img src={me} alt="my image" className="me-img" />
                    </div>
                </div>
                <div className="scroll">
                    <a href="#about" className="scroll__down">
                        Scroll Down
                        <span>
                            <IoMdArrowDown />
                        </span>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
