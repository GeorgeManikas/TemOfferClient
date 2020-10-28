import React from 'react'
import fetch from 'isomorphic-unfetch'
import getConfig from 'next/config'
import ModulProduct from '../../components/ModulProduct'
const index = ( { switches }) => {
    return (
        <div>
            <ModulProduct sw={switches[0]} /> 
        </div>
    )
}

export const getStaticProps = async () => {
    const { publicRuntimeConfig } = getConfig()
    const {API_URL} = publicRuntimeConfig;
    const response = await fetch(`${API_URL}/products`)
    const switches = await response.json()

    return{
        props : 
            {
                switches
            }
    }
}

export default index
