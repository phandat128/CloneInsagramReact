import Me_icon from "./assets/image/Me_icon.jpg";
import status_img from "./assets/image/status_img.jpg";
import status_img2 from "./assets/image/status_img2.jpg";
import status_img3 from "./assets/image/status_img3.jpg";
import default_img from "./assets/image/default_img.png";


function Body(){
    return (
        <div className="Body" class="surf">
                <div class="story">
                    <a href="">
                        <div class="story1">
                            <div class="storyimg">
                                <img src={Me_icon} alt="" width="56px" height="56px"/>
                            </div>
                            <div class="name">name_abcxyz</div>
                        </div>
                    </a>
                    <a href="">
                        <div class="story1">
                            <div class="storyimg">
                                <img src={Me_icon} alt="" width="56px" height="56px"/>
                            </div>
                            <div class="name">name_asd</div>
                        </div>
                    </a>
                    <a href="">
                        <div class="story1">
                            <div class="storyimg">
                                <img src={Me_icon} alt="" width="56px" height="56px"/>
                            </div>
                            <div class="name">name_tuv</div>
                        </div>
                    </a>
                </div>
                <div class="news">
                    <div class="news_container">
                        <div class="container">
                            <div class="news_header">
                                <div class="news_info">
                                    <a href="" class="news_avatar">
                                        <img src={default_img}
                                            alt="" width="32px" height="32px"/>
                                    </a>
                                    <div class="news_name name_in_header">
                                        <a href="">anonymous</a>
                                    </div>
                                </div>
                                <div class="moreButton">
                                    <button>
                                        <i class="ti-more-alt"></i>
                                    </button>
                                </div>
                            </div>

                            <div>
                                <img src= {status_img3} alt=""
                                    width="100%"/>
                            </div>

                            <div class="news_nav">
                                <div class="love_btn">
                                    <button type="button">
                                        <svg aria-label="Bỏ thích" class="_ab6-" color="#ed4956" fill="#ed4956"
                                            height="24" role="img" viewBox="0 0 48 48" width="24">
                                            <path
                                                d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z">
                                            </path>
                                        </svg>
                                    </button>
                                </div>
                                <div class="comment_btn">
                                    <button type="button">
                                        <svg aria-label="Bình luận" class="_ab6-" color="#262626" fill="#262626"
                                            height="24" role="img" viewBox="0 0 24 24" width="24">
                                            <path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none"
                                                stroke="currentColor" stroke-linejoin="round" stroke-width="2">
                                            </path>
                                        </svg>
                                    </button>
                                </div>
                                <div class="share_btn">
                                    <button type="button">
                                        <svg aria-label="Chia sẻ bài viết" class="_ab6-" color="#262626" fill="#262626"
                                            height="24" role="img" viewBox="0 0 24 24" width="24">
                                            <line fill="none" stroke="currentColor" stroke-linejoin="round"
                                                stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line>
                                            <polygon fill="none"
                                                points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                                                stroke="currentColor" stroke-linejoin="round" stroke-width="2">
                                            </polygon>
                                        </svg>
                                    </button>
                                </div>
                                <div class="save_btn">
                                    <button type="button">
                                        <svg aria-label="Lưu" class="_ab6-" color="#262626" fill="#262626" height="24"
                                            role="img" viewBox="0 0 24 24" width="24">
                                            <polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                                                stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2">
                                            </polygon>
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div class="descript">
                                <div class="liked">
                                    <span>Ai đó đã thích bài viết</span>
                                </div>
                                <div class="news_title">
                                    <div class="news_name name_in_title">
                                        <a href="">anonymous</a>
                                    </div>
                                    <div class="title">
                                        <span>Xung quanh ngày càng nhiều xanh lá 🍃</span>
                                    </div>
                                </div>
                                <div class="time_posted">
                                    <span>16 GIỜ TRƯỚC</span>
                                </div>
                                <div class="add_comment">
                                    <form method="post">
                                        <div class="icon_btn">
                                            <button type="button">
                                                <svg aria-label="Biểu tượng cảm xúc" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
                                                    <path
                                                        d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z">
                                                    </path>
                                                </svg>
                                            </button>
                                        </div>
                                        <div class="input_comment">
                                            <input type="text" placeholder="Thêm bình luận..."/>
                                        </div>
                                        <button class="post_btn" type="button">Đăng</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div class="container">
                            <div class="news_header">
                                <div class="news_info">
                                    <a href="" class="news_avatar">
                                        <img src={default_img}
                                            alt="" width="32px" height="32px"/>
                                    </a>
                                    <div class="news_name name_in_header">
                                        <a href="">anonymous</a>
                                    </div>
                                </div>
                                <div class="moreButton">
                                    <button>
                                        <i class="ti-more-alt"></i>
                                    </button>
                                </div>
                            </div>

                            <div>
                                <img src={status_img2} alt=""
                                    width="100%"/>
                            </div>

                            <div class="news_nav">
                                <div class="love_btn">
                                    <button type="button">
                                        <svg aria-label="Bỏ thích" class="_ab6-" color="#ed4956" fill="#ed4956"
                                            height="24" role="img" viewBox="0 0 48 48" width="24">
                                            <path
                                                d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z">
                                            </path>
                                        </svg>
                                    </button>
                                </div>
                                <div class="comment_btn">
                                    <button type="button">
                                        <svg aria-label="Bình luận" class="_ab6-" color="#262626" fill="#262626"
                                            height="24" role="img" viewBox="0 0 24 24" width="24">
                                            <path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none"
                                                stroke="currentColor" stroke-linejoin="round" stroke-width="2">
                                            </path>
                                        </svg>
                                    </button>
                                </div>
                                <div class="share_btn">
                                    <button type="button">
                                        <svg aria-label="Chia sẻ bài viết" class="_ab6-" color="#262626" fill="#262626"
                                            height="24" role="img" viewBox="0 0 24 24" width="24">
                                            <line fill="none" stroke="currentColor" stroke-linejoin="round"
                                                stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line>
                                            <polygon fill="none"
                                                points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                                                stroke="currentColor" stroke-linejoin="round" stroke-width="2">
                                            </polygon>
                                        </svg>
                                    </button>
                                </div>
                                <div class="save_btn">
                                    <button type="button">
                                        <svg aria-label="Lưu" class="_ab6-" color="#262626" fill="#262626" height="24"
                                            role="img" viewBox="0 0 24 24" width="24">
                                            <polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                                                stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2">
                                            </polygon>
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div class="descript">
                                <div class="liked">
                                    <span>Ai đó đã thích bài viết</span>
                                </div>
                                <div class="news_title">
                                    <div class="news_name name_in_title">
                                        <a href="">anonymous</a>
                                    </div>
                                    <div class="title">
                                        <span>214D3 view...</span>
                                    </div>
                                </div>
                                <div class="time_posted">
                                    <span>19 GIỜ TRƯỚC</span>
                                </div>
                                <div class="add_comment">
                                    <form method="post">
                                        <div class="icon_btn">
                                            <button type="button">
                                                <svg aria-label="Biểu tượng cảm xúc" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
                                                    <path
                                                        d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z">
                                                    </path>
                                                </svg>
                                            </button>
                                        </div>
                                        <div class="input_comment">
                                            <input type="text" placeholder="Thêm bình luận..."/>
                                        </div>
                                        <button class="post_btn" type="button">Đăng</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div class="container">
                            <div class="news_header">
                                <div class="news_info">
                                    <a href="" class="news_avatar">
                                        <img src={default_img}
                                            alt="" width="32px" height="32px"/>
                                    </a>
                                    <div class="news_name name_in_header">
                                        <a href="">anonymous</a>
                                    </div>
                                </div>
                                <div class="moreButton">
                                    <button>
                                        <i class="ti-more-alt"></i>
                                    </button>
                                </div>
                            </div>

                            <div>
                                <img src={status_img} alt=""
                                    width="100%"/>
                            </div>

                            <div class="news_nav">
                                <div class="love_btn">
                                    <button type="button">
                                        <svg aria-label="Bỏ thích" class="_ab6-" color="#ed4956" fill="#ed4956"
                                            height="24" role="img" viewBox="0 0 48 48" width="24">
                                            <path
                                                d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z">
                                            </path>
                                        </svg>
                                    </button>
                                </div>
                                <div class="comment_btn">
                                    <button type="button">
                                        <svg aria-label="Bình luận" class="_ab6-" color="#262626" fill="#262626"
                                            height="24" role="img" viewBox="0 0 24 24" width="24">
                                            <path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none"
                                                stroke="currentColor" stroke-linejoin="round" stroke-width="2">
                                            </path>
                                        </svg>
                                    </button>
                                </div>
                                <div class="share_btn">
                                    <button type="button">
                                        <svg aria-label="Chia sẻ bài viết" class="_ab6-" color="#262626" fill="#262626"
                                            height="24" role="img" viewBox="0 0 24 24" width="24">
                                            <line fill="none" stroke="currentColor" stroke-linejoin="round"
                                                stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line>
                                            <polygon fill="none"
                                                points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                                                stroke="currentColor" stroke-linejoin="round" stroke-width="2">
                                            </polygon>
                                        </svg>
                                    </button>
                                </div>
                                <div class="save_btn">
                                    <button type="button">
                                        <svg aria-label="Lưu" class="_ab6-" color="#262626" fill="#262626" height="24"
                                            role="img" viewBox="0 0 24 24" width="24">
                                            <polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                                                stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2">
                                            </polygon>
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div class="descript">
                                <div class="liked">
                                    <span>Ai đó đã thích bài viết</span>
                                </div>
                                <div class="news_title">
                                    <div class="news_name name_in_title">
                                        <a href="">anonymous</a>
                                    </div>
                                    <div class="title">
                                        <span>Đi rồi đi để nhận ra
                                            Nơi đẹp nhất là mái nhà</span>
                                    </div>
                                </div>
                                <div class="time_posted">
                                    <span>23 GIỜ TRƯỚC</span>
                                </div>
                                <div class="add_comment">
                                    <form method="post">
                                        <div class="icon_btn">
                                            <button type="button">
                                                <svg aria-label="Biểu tượng cảm xúc" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
                                                    <path
                                                        d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z">
                                                    </path>
                                                </svg>
                                            </button>
                                        </div>
                                        <div class="input_comment">
                                            <input type="text" placeholder="Thêm bình luận..."/>
                                        </div>
                                        <button class="post_btn" type="button">Đăng</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Body;