import { React, useState} from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
const AddCategory = ({addCategory}) => {
    let navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = (data) => {
        console.log(data);
        addCategory(data)
        alert("Thêm sản phẩm thành công")
        navigate("/admin/categories");
    }
    
    return (
        
        <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <div className="px-4 py-5 bg-white sm:p-6">
                        <div className="grid grid-cols-2">
                            <div className="mx-2">
                                <div className="my-2">
                                    <label className="">Category name</label>
                                    <input
                                        className="form-control"
                                        {...register('name')}
                                    />
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

export default AddCategory
