import React, { useEffect, useState } from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const PlaceOrder = () => {
    const history = useHistory();
    const { user } = useAuth();
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    useEffect(() => {
        fetch(`https://vast-shelf-40329.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, []);

    const onSubmit = data => {
        data.serviceId = service.serviceId;
        data.serviceName = service.name;
        data.servicePrice = service.price;
        data.serviceImage = service.image;
        data.isActive = false;

        axios.post('https://vast-shelf-40329.herokuapp.com/orders', data)
            .then(response => {
                if (response.data.insertedId) {
                    Swal.fire(
                        'Success!',
                        'Your order added successfully!',
                        'success'
                    );
                    reset();
                    history.push('/myOrders');
                }
            })
            .catch(error => {
                Swal.fire(
                    'Failed!',
                    'Something Went wrong!',
                    'error'
                );
            });
    }

    return (
        <>
            <Container>
                <Row className="my-5">
                    <div className="w-75 mx-auto text-center">
                        <h2>PACKAGE DETAILS</h2>
                    </div>
                </Row>
                <Row className="mb-5">
                    {
                        service._id &&
                        <>
                            <div className="col-md-5">
                                <Card>
                                    <div className="p-3">
                                        <Card.Img variant="top" src={service.image} className="rounded" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="text-success">{service.name}</Card.Title>
                                        <Card.Text className="text-muted">{service.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-md-7">
                                <Card className="p-3">
                                    <h3 className="text-center mb-2">Place Your Order!</h3>
                                    <hr />
                                    <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
                                        <div className="mb-3 row">
                                            <label className="col-sm-2 col-form-label">Name</label>
                                            <div className="col-sm-10">
                                                <input
                                                    value={user.displayName}
                                                    className="form-control"
                                                    readOnly
                                                    {...register("name")} />
                                            </div>
                                        </div>

                                        <div className="mb-3 row">
                                            <label className="col-sm-2 col-form-label">Email</label>
                                            <div className="col-sm-10">
                                                <input
                                                    type="email"
                                                    value={user.email}
                                                    className="form-control"
                                                    readOnly
                                                    {...register("email")} />
                                            </div>
                                        </div>

                                        <div className="mb-3 row">
                                            <label className="col-sm-2 col-form-label">Mobile</label>
                                            <div className="col-sm-10">
                                                <input
                                                    className="form-control"
                                                    {...register("mobile", { required: true })} />
                                                {
                                                    errors.mobile?.type === 'required' &&
                                                    <div className="text-danger">
                                                        Mobile is required
                                                    </div>
                                                }
                                            </div>
                                        </div>

                                        <div className="mb-3 row">
                                            <label className="col-sm-2 col-form-label">Address</label>
                                            <div className="col-sm-10">
                                                <textarea placeholder="Details Address" className="form-control" rows="3" {...register("address", { required: true })} />
                                                {
                                                    errors.address?.type === 'required' &&
                                                    <div className="text-danger">
                                                        Address is required
                                                    </div>
                                                }
                                            </div>
                                        </div>

                                        <div className="mb-3 row">
                                            <div className="col-md-12">
                                                <input className="btn btn-primary float-end" type="submit" value="Order" />
                                            </div>
                                        </div>
                                    </form>
                                </Card>
                            </div>
                        </>
                    }
                </Row>
            </Container>
        </>
    );
};

export default PlaceOrder;