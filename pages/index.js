import fetch from 'isomorphic-unfetch'
import getConfig from 'next/config'
import SeriesPicker from '../components/SeriesPicker'

export default function Home( { series }) {
  return (
    <SeriesPicker series={series} /> 
    
  )
}

// fetch series choices (modul or ekonomik)
export const getStaticProps = async () => { 
  const { publicRuntimeConfig} = getConfig()
  const { API_URL } = publicRuntimeConfig;
    const response = await fetch(`${API_URL}/series`)
    const series = await response.json()

    return{
      props : {
        series
      }
    }


}
