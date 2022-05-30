import Header from "../components/header";
import Footer from "../components/footer";
import data from "../data";

const ProductDetail = {
    render(id) {
        // console.log(id);
        const result = data.find((item) => item.id == id);
        // console.log(result)
        return /*html*/`
            <div id="header">${Header.render()}</div>
            <div id="news">
                <div class="products-detail">
                    <div class="colum1">
                        <img src="${result.image}" alt="">
                    </div>
                    <div class="colum2">
                        <span>${result.short_description}</span>
                        <h3>${result.title}</h3>
                        <p>Giá: ${result.price}</p>
                        <span>Nhà xuất bản: ${result.publisher}</span>
                        <form action="">
                            Số lượng
                            <input type="number" min="0" id="" name="">
                            <button>Chọn Mua</button>
                        </form>
                    </div>
                    <div class="colum3">
                        <h4>Mô tả sản phẩm</h4>
                        <p>${result.description}</p>
                    </div>
                </div>
            </div>
            <div id="footer">${Footer.render()}</div>
        `;
    },
};

export default ProductDetail;