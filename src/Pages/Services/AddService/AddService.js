import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import Swal from 'sweetalert2';

const AddService = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        reset();
        axios.post('https://vast-shelf-40329.herokuapp.com/services', data)
            .then(response => {
                if (response.data.insertedId) {
                    Swal.fire(
                        'Success!',
                        'New service added successfully!',
                        'success'
                    );
                    reset();
                }
            })
            .catch(error => {
                console.log(error);
                Swal.fire(
                    'Failed!',
                    'Something Went wrong!',
                    'error'
                );
            });
    }

    return (
        <div className="w-50 mx-auto bg-light border my-4 p-4">
            <h3 className="text-center mb-4">Add New Service</h3>
            <hr />

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3 row">
                    <label className="col-sm-3 col-form-label">Service Name</label>
                    <div className="col-sm-9">
                        <input placeholder="Service Name" className="form-control" {...register("name", { required: true })} />
                        {
                            errors.name?.type === 'required' &&
                            <div className="text-danger">
                                Service name is required
                            </div>
                        }
                    </div>
                </div>

                <div className="mb-3 row">
                    <label className="col-sm-3 col-form-label">Description</label>
                    <div className="col-sm-9">
                        <textarea placeholder="Service Description" className="form-control" rows="3" {...register("description", { required: true })} />
                        {
                            errors.description?.type === 'required' &&
                            <div className="text-danger">
                                Service description is required
                            </div>
                        }
                    </div>
                </div>

                <div className="mb-3 row">
                    <label className="col-sm-3 col-form-label">Price</label>
                    <div className="col-sm-9">
                        <input type="number" min="0" className="form-control" placeholder="Service Price" {...register("price", { required: true, min: 0 })} />
                        {
                            errors.price?.type === 'required' &&
                            <div className="text-danger">
                                Service price is required
                            </div>
                        }
                    </div>
                </div>

                <div className="mb-3 row">
                    <label className="col-sm-3 col-form-label">Image URL</label>
                    <div className="col-sm-9">
                        <input placeholder="Image Url" className="form-control" {...register("image", { required: true })} />
                        {
                            errors.image?.type === 'required' &&
                            <div className="text-danger">
                                Image url is required
                            </div>
                        }
                    </div>
                </div>

                <div className="mb-3 row">
                    <div className="col-md-12">
                        <input className="btn btn-primary float-end" type="submit" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddService;