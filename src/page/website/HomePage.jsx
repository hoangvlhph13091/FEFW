import Footer from "../../components/website/Footer";
import Header from "../../components/website/Header";
import Slider from "../../components/website/Slider";
import { Link } from "react-router-dom";
const HomePage = (props) => {

    return (
        <div>
            <Header />
            <Slider />
            <div className="my-16">
                <div className="text-center mb-20">
                    <h2 className="font-semibold text-4xl my-2">Products</h2>
                </div>
                <div className="container mx-auto">
                    <div className="row ">
                        {props.products.map((products) => {
                            return (

                                <div className="card mx-3" style={{ width: '18rem' }}>
                                    <img src={products.image} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{products.name}</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Chi Tiết Sản Phẩm</a>
                                    </div>
                                </div>

                            );

                        })}
                    </div>
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default HomePage