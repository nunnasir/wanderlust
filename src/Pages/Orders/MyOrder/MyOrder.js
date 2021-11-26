import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        const email = [user.email];

        fetch('https://vast-shelf-40329.herokuapp.com/orders/byEmail', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(email)
        })
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);

    // Delete Order
    const onDeleteOrder = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://vast-shelf-40329.herokuapp.com/orders/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your data has been deleted.',
                                'success'
                            )
                            const remainOrders = orders.filter(order => order._id !== id);
                            setOrders(remainOrders);
                        }
                    })
                    .catch(error => {
                        Swal.fire(
                            'Failed!',
                            'Something Went wrong!',
                            'error'
                        );
                    })
            }
        })
    }

    return (
        <>
            <Container className="mt-4">
                <Row>
                    <div className="w-75 mx-auto text-center">
                        <h2>MY ORDERS</h2>
                        <hr />
                    </div>
                </Row>
                <Row className="mt-4">
                    <div className="table-responsive">
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Package Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders.map((order, index) =>
                                        <tr key={order._id}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{order.serviceName}</td>
                                            <td>{order.servicePrice}</td>
                                            <td>{order.isActive ? 'Active' : 'Inactive'}</td>
                                            <td>
                                                <button
                                                    onClick={() => onDeleteOrder(order._id)}
                                                    type="button"
                                                    className="btn btn-danger btn-sm"
                                                >
                                                    <i className="fas fa-trash-alt"></i>
                                                </button>
                                            </td>
                                        </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </Row>
            </Container>
        </>
    );
};

export default MyOrder;