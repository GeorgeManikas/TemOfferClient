import React, { useEffect, useState, useContext } from 'react'
import getConfig from 'next/config'
import SwitchContext from '../context/SwitchContext'
import { SELECTED_COLOR, FETCH_INDIVIDUAL_SWITCH } from '../context/types'
import fetch from 'isomorphic-unfetch'
const EkonomikSelectColor = () => {
    const { publicRuntimeConfig } = getConfig()
    const {API_URL} = publicRuntimeConfig 
    const { value, dispatch } = useContext(SwitchContext)

    const [ colors, setColor ] = useState(null)

    const handleChange = (e) => {
        dispatch({type:SELECTED_COLOR, payload: e.target.value})
        dispatch({type:FETCH_INDIVIDUAL_SWITCH})
      }

    useEffect(()=> {
        const fetchColors = async () => {
            const res = await fetch(`${API_URL}/switch-colors?series.serie=${value.serie}`)
            const data = await res.json()
            setColor(data)
        }
        fetchColors()
    },[])
    

    if (!colors ) return <div>...loading ... </div> 
    return (
        
            <select className=" bg-transparent appearance-none border-b border-yellow-600 text-gray-700" 
            onChange={e => handleChange(e)}>
                {colors.map( color => (
                    <option key={color.id} value={color.code} > {color.description} </option>
                ))}
            </select>
        
    )
}

export default EkonomikSelectColor
