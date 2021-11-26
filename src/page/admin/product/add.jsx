import React from 'react'
import { useForm } from "react-hook-form";
const AddProduct = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        
      
                const newItems = {
                    ...data,
                    id: "",
                };

                props.addProduct(newItems)
                alert("Thêm sản phẩm thành công")
        

    }
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
                                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Price</label>
                                    <input
                                        className="form-control"
                                        {...register('price')}
                                    />
                                </div>
                                <div className="my-2">
                                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Image Link</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        {...register('image')}
                                    />
                                </div>
                                <div className="my-2">
                                    <label htmlFor="country" >Category</label>
                                    <select {...register('category')} className="form-control">
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

export default AddProduct

