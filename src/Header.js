import Instagram_logo from "./assets/image/Instagram_logo.svg.png";
import Home_icon from "./assets/image/Home_icon.png"
import message_icon from "./assets/image/message_icon.jpg";
import Plus_icon from "./assets/image/Plus_icon.jpg";
import images from "./assets/image/images.png";
import heart_icon from "./assets/image/Heart_icon.png";
import Me_icon from "./assets/image/Me_icon.jpg";


function Header(){
    return (
        <div className="Header" class="nav">
            <nav>
                <div class="nav_container">
                    <div class="instagram">
                        <a href="https://www.instagram.com/">
                            <img src={Instagram_logo} alt="" width="102px" height="36px"/>
                        </a>
                    </div>

                    <div class="search">
                        <div>
                            <input type="text" placeholder="Tìm kiếm"/>
                            <div class="search_icon">
                                <i class="ti-search"></i>
                            </div>
                        </div>
                    </div>

                    <div class="button">
                        <div class="HomeButton">
                            <a href="">
                                <img src={Home_icon} alt="" width="24px" height="24px"/>
                            </a>
                        </div>
                        <div class="MessageButton">
                            <a href="">
                                <img src={message_icon} alt="" width="24px" height="24px"/>
                            </a>
                        </div>
                        <div class="NewButton">
                            <a href="">
                                <img src={Plus_icon} alt="" width="24px" height="24px"/>
                            </a>
                        </div>
                        <div class="ExploreButton">
                            <a href="">
                                <img src={images} alt="" width="24px" height="24px"/>
                            </a>
                        </div>
                        <div class="NotiButton">
                            <a href="">
                                <img src={heart_icon} alt="" width="24px" height="24px"/>
                            </a>
                        </div>
                        <div class="MeButton">
                            <a href="">
                                <img src={Me_icon} alt="" width="24px" height="24px"/>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        
    )
}

export default Header;