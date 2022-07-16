import Me_icon from "./assets/image/Me_icon.jpg";


function Sidebar(){
    return (
        <div className="Sidebar" class="right_nav">
                <div class="me">
                    <div class="avatar">
                        <img src={Me_icon} alt="" width="56px" height="56px"/>
                    </div>
                    <div class="info">
                        <div class="nickname">
                            <a href="">phandat12</a>
                        </div>
                        <div class="name">Phan Đạt</div>
                    </div>
                    <div class="change_acc">
                        <button type="button">Chuyển</button>
                    </div>
                </div>
                <div class="suggest">
                    <div class="suggest_header">
                        <div class="text">Gợi ý cho bạn</div>
                        <div class="see_all">
                            <a href="">Xem tất cả</a>
                        </div>
                    </div>
                    <div class="friend_suggest">
                        <div>
                            <div class="avatar">
                                <img src={Me_icon} alt="" width="32px" height="32px"/>
                            </div>
                            <div class="info">
                                <div class="nickname">
                                    <a href="#">nickname</a>
                                </div>
                                <div class="relate">Có abcxyz + 1 người nữa theo dõi</div>
                            </div>
                            <div class="follow">
                                <button type="button">Theo dõi</button>
                            </div>
                        </div>
                        <div>
                            <div class="avatar">
                                <img src={Me_icon} alt="" width="32px" height="32px"/>
                            </div>
                            <div class="info">
                                <div class="nickname">
                                    <a href="">nickname</a>
                                </div>
                                <div class="relate">Có abcxyz + 1 người nữa theo dõi</div>
                            </div>
                            <div class="follow">
                                <button type="button">Theo dõi</button>
                            </div>
                        </div>
                        <div>
                            <div class="avatar">
                                <img src={Me_icon} alt="" width="32px" height="32px"/>
                            </div>
                            <div class="info">
                                <div class="nickname">
                                    <a href="">nickname</a>
                                </div>
                                <div class="relate">Có abcxyz + 1 người nữa theo dõi</div>
                            </div>
                            <div class="follow">
                                <button type="button">Theo dõi</button>
                            </div>
                        </div>
                        <div>
                            <div class="avatar">
                                <img src={Me_icon} alt="" width="32px" height="32px"/>
                            </div>
                            <div class="info">
                                <div class="nickname">
                                    <a href="">nickname</a>
                                </div>
                                <div class="relate">Có abcxyz + 1 người nữa theo dõi</div>
                            </div>
                            <div class="follow">
                                <button type="button">Theo dõi</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Sidebar;