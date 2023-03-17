import React from 'react'
import { Outlet } from 'react-router-dom'

const ProductLayout = () => {
    return (
        <>
            <div>Products</div>
            <section>
                <Outlet />
            </section>
        </>
    )
}

export default ProductLayout