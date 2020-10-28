import React from 'react'
import getConfig from 'next/config'
import fetch from 'isomorphic-unfetch'
import EkonomikProductList from '../../components/EkonomikProductList'
const index = ( {products, image   }) => {
    return (
        <>
        <EkonomikProductList products={products} image={image}/> 
        </>
    )
}

export const getStaticProps = async () => {
    const { publicRuntimeConfig} = getConfig();
    const { API_URL } = publicRuntimeConfig
    const response = await fetch(`${API_URL}/Ekonomik-products`)
    const data = await response.json()
    

    return { 
        props: {
            products : data,
            image : data[0].serie.image
        }
    }
}

export default index
