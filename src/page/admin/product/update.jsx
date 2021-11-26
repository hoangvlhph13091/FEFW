import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import ProductApi from '../../../api/ProductsApi';

const UpdateProduct = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [Product, setProduct] = useState({});
    let { id } = useParams();
    console.log(id);
    let navigate = useNavigate();
    useEffect(() => {
        const getProduct = async () => {
            try {
                const { data } = await ProductApi.get(id)
                setProduct(data);
                console.log(data)

            } catch (err) {
                console.log("error",err);
            }
        };
        getProduct();
    }, []);
    const onSubmit = (data) => {
        console.log('data', data);
       
                const newdata = {
                    ...data,
                    id: id,
                };
        console.log('newdata', newdata);
                props.updateProduct(newdata);
                alert('update thành công');
                navigate("/admin/products");
        
    };
    return (
      
        <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <div className="px-4 py-5 bg-white sm:p-6">
                        <div className="grid grid-cols-2">
                            <div className="mx-2">
                                <div className="my-2">
                                    <label className="">Product name</label>
                                    <input
                                        className="form-control"
                                        {...register('name')}
                                    />
                                </div>
                                <div className="my-2">
                                    <label htmlFor="" className="block text-sm font-medium text-gray-700">Price</label>
                                    <input
                                        className="form-control"
                                        {...register('price')}
                                    />
                                </div>
                                <div className="my-2">
                                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Image Link</label>
                                    <input
                                        type=""
                                        className="form-control"
                                        {...register('image')}
                                    />
                                </div>
                                <div className="my-2">
                                    <label htmlFor="" className="block text-sm font-medium text-gray-700">Category</label>
                                    <select {...register('category')}  className="form-control">
                                    {
                                            props.category ? props.category.map((categories, index) => {
                                                return (
                                                    <option key={index} value={categories._id}>{categories.name}</option>
                                                );
                                            })
                                                : ""}
                                    </select>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">

                        <button style={{color: 'white'}} type="submit" className="btn btn-info">
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default UpdateProduct
