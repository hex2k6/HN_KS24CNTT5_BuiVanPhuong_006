import React from 'react'
import BlogShow from './BlogShow'
import './From.css'
function From() {
    return (
        <>
            <header>
                <div>
                    <span>3</span>
                    <p>Bài Viết</p>
                </div>
                <div>
                    <span>1</span>
                    <p>Lượt thích</p>
                </div>
            </header>
            <div className='container'>
                <select  >
                    <option value="0">Tất cả</option>
                    <option value="1">Yêu thích</option>
                </select>
                <div className='main'>
                    <button>Tạo bài viết</button>
                    <div>
                        <form className='form'>
                            <h1>Bài Viet Của Bạn</h1>
                            <hr />
                            <h6>Tiêu đề<span>*</span></h6>
                            <input type="text" placeholder='' />
                            <h6>Nội dung<span>*</span></h6>
                            <input></input>
                            <hr />
                            <button>Đăng</button>
                            <button>Hủy</button>
                        </form>
                    </div>

                </div>
            </div>

            <BlogShow />
        </>
    )
};

export default From
