import React from 'react'
import { Link, } from 'react-router-dom'
const ListProduct = (props) => {
    const onHandleRemove = (id) => {
        const question = window.confirm('Bạn có chắc muốn xóa không?');
        if (question) {
            props.removeProduct(id);
        }

    }
    return (
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            {/* /.content-header */}
            {/* Main content */}
            <section className="content">
                <div className="container-fluid">
                    {/* Small boxes (Stat box) */}
                    <div className="row">
                        <div className="">
                            <div className="card">
                                <div className="card-header">
                                    <div className="row">
                                        <Link to="addproducts" className=" btn btn-info" style={{ width: '80px' }}>Add</Link>
                                    </div>
                                </div>
                                {/* card header*/}
                                <div className="card-body">
                                    <table id="example2" className="table table-bordered table-hover">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Name</th>
                                                <th>Image</th>
                                                <th>Price</th>
                                                <th>Category</th>
                                                <th />
                                                <th />
                                            </tr>
                                        </thead>
                                        <tbody>
                                            
                                            {props.products.map((products) => (
                                                <tr>
                                                    <td>{products.id}</td>
                                                    <td>{products.name}</td>
                                                    <td> <img src={products.image} style={{ width: '100px' }} alt="lỗi sml" /></td>
                                                    <td>{products.price}</td>
                                                    <td>{products.category}</td>
                                                    <td ><Link to={`/admin/products/update/${products.id}`} className="btn btn-info"><i className="fa fa-edit" /></Link></td>
                                                    <td><Link to="#" className="btn btn-danger" onClick={() => onHandleRemove(products.id)}> <i className="fa fa-trash" /></Link></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /.row (main row) */}
                </div>{/* /.container-fluid */}
            </section>
            {/* /.content */}
        </div>


    )
}

export default ListProduct


