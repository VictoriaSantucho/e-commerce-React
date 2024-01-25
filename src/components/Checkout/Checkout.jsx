import React, {useContext} from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import {collection, addDoc} from 'firebase/firestore';
import db from '../../db/db';

import {Form} from './Form';
import {CartContext} from '../../context/CartContext';

const Checkout = () => {
    const [dataForm, setDataForm] = useState({
        nombre: '',
        mobilePhone: '',
        email: '',
        emailConfirm: '',
    });

    const [idOrder, setIdOrder] = useState('');

    const { cart, totalPrice, cleanCart } = useContext(CartContext);

    const toastMixin = Swal.mixin({
        toast: true,
        animation: false,
        showConfirmButton: false,
        timer: 1400,
    });

    const handleChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value,
        });
    };

    const sendOrder = (e) => {
        e.preventDefault();
        if (dataForm.email !== dataForm.emailConfirm) {
            toastMixin.fire({
                title: 'Emails do not match.',
                position: 'top',
                icon: 'warning',
            });
            return;
        }
        const order = {
            buyer: { ...dataForm },
            products: [...cart],
            total: totalPrice(),
            date: new Date(),
        };
        uploadOrder(order);
    };

    const uploadOrder = (order) => {
        // reference to orders collection in firestore
        const ordersRef = collection(db, 'orders');
        // add order to orders collection
        addDoc(ordersRef, order).then((response) => {
            setIdOrder(response.id);
        });
        cleanCart();
    };

    return (
        <div>
            {idOrder ? (
                <div className='order-sent'>
                    <h2>Order sent successfully!</h2>
                    <p className='orederId'>
                        <strong>Order ID: </strong>
                        {idOrder}
                    </p>
                    <p className='orderTks'>Thanks for your purchase!</p>
                    <Link to='/' className='button-goToShop'>
                        Continue Shopping
                    </Link>
                </div>
            ) : (
                <Form sendOrder={sendOrder} handleChange={handleChange} dataForm={dataForm} />
            )}
        </div>
    );
};

export default Checkout;
