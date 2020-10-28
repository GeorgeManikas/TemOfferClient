import '../styles/tailwind.css'
import SwitchState from '../context/SwitchState'
function MyApp({ Component, pageProps }) {
  return (
    <SwitchState>
    <div className=" bg-gray-300 w-full h-screen">
     <div> <Component {...pageProps} /></div>
      </div>
    </SwitchState>

  )
  
}

export default MyApp
