import React from 'react'

const Product = ({product}) => {
    return (
        <>
         <div className="flex flex-col justify-center items-center mx-auto   text-center border">
            <img src={product.serie.image} alt={product.id} /> 
            <div className="py-8 text-3xl font-extrabold text-gray-700 mb-8">{product.ekonomik_switch.description} {product.switch_color.description} {product.serie.serie}  </div>
            <div className="py-8 mx-auto "> <img className=" transform hover:scale-125   transition-all duration-500 ease-in cursor-pointer" src={product.image.formats.thumbnail.url} /> </div>
            <div className="text-3xl font-semibold text-green-600 mt-8 "> Τιμή :  {product.price}€ </div>
            
             {/* <pre>{JSON.stringify(product,null,4)} </pre>  */}
         </div>
        </>
    )
}

export default Product
