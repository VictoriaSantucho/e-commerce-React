import React from 'react'


export const Form = ({ sendOrder, dataForm, handleChange }) => {

    return (
        <div className='form-container'>
            <h2>Complete the form to finalize your purchase.</h2>
            <form className='form' onSubmit={sendOrder}>
                <label htmlFor="nombre">Nombre</label>
                <input
                    type="text"
                    required
                    id="nombre"
                    name="nombre"
                    value={dataForm.nombre}
                    onChange={handleChange}
                />
                <label htmlFor="mobilePhone">Telefono</label>
                <input
                    type="text"
                    required
                    id="mobilePhone"
                    name="mobilePhone"
                    value={dataForm.mobilePhone}
                    onChange={handleChange}
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    required
                    id="email"
                    name="email"
                    value={dataForm.email}
                    onChange={handleChange}
                />
                <label htmlFor="emailConfirm">Confirm Email</label>
                <input
                    type="email"
                    required
                    id="emailConfirm"
                    name="emailConfirm"
                    value={dataForm.emailConfirm}
                    onChange={handleChange}
                />
                <button className='button-sendOrder' type="submit">Send</button>
            </form>
        </div>
    )
}
