import React from 'react'
import { Link } from 'react-router-dom'
const ListCategory = (props) => {
    const onHandleRemove = (id) => {
        const question =window.confirm('Bạn có chắc muốn xóa không?');
        if(question){
            props.removeCategory(id);
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
                                        <Link to="addcategory" className=" btn btn-info" style={{ width: '80px' }}>Add</Link>
                                    </div>
                                </div>
                                {/* card header*/}
                                <div className="card-body">
                                    <table id="example2" className="table table-bordered table-hover">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Name</th>

                                                <th />
                                                <th />
                                            </tr>
                                        </thead>
                                        <tbody>
                                            
                                            {props.category.map((category) => (
                                                <tr>
                                                    <td>{category.id}</td>
                                                    <td>{category.name}</td>
                                                    <td ><Link to={`/admin/categories/update/${category.id}`} className="btn btn-info"><i className="fa fa-edit" /></Link></td>
                                                    <td><Link to="#" className="btn btn-danger" onClick={() => onHandleRemove(category.id)}> <i className="fa fa-trash" /></Link></td>
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

export default ListCategory


