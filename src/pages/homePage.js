import Header from "../components/header";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import data from "../data";
const HomePage = {
    render() {
        return /*html*/`
        <div id="header">${Header.render()}</div>
            <div id="news">
                <div class="news-main">
                    ${Navbar.render()}
                    <div class="new-pro">
                        <div class="banner">
                            <div class="banner-text">
                                <h2>Nhà Sách TiKi</h2>
                            </div>
                            <div class="banner-img">
                                <img src="../../asset/banner.png" alt="">
                            </div>
                        </div>
                        <div class="new-pro-menu">
                            <ul>
                                <li><a href="/ptoducts" data-navigo>Phổ Biến</a></li>
                                <li><a href="">Bán Chạy</a></li>
                                <li><a href="">Hàng Mới</a></li>
                                <li><a href="">Giá Thấp</a></li>
                                <li><a href="">Giá Cao</a></li>
                            </ul>
                        </div>
                        <div class="products">
                            ${data.map(item => `
                                <div class="pro_col">
                                    <a href="/products/${item.id}" data-navigo>
                                        <img src="${item.image}" alt="">
                                        <p>${item.price}</p>
                                        <h3>${item.title}</h3>
                                    </a>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
            <div id="footer">${Footer.render()}</div>
        `;
    },
};
export default HomePage;