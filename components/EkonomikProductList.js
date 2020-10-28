import React, { useContext, useEffect } from "react";
import SwitchContext from "../context/SwitchContext";
import { FETCH_SWITCHES, FETCH_INDIVIDUAL_SWITCH , RESET_SWITCHES} from "../context/types";
import EkonomikSelectColor from "./EkonomikSelectColor";
import EkonomikSwitchType from "./EkonomikSwitchType";
import Product from "./Product";
import { useRouter } from 'next/router'
import { route } from "next/dist/next-server/server/router";
const EkonomikProductList = ({ products, image  }) => {
  const { value, dispatch } = useContext(SwitchContext);

  useEffect(() => {
    dispatch({type:RESET_SWITCHES})
    dispatch({ type: FETCH_SWITCHES, payload: products });

    dispatch({type:FETCH_INDIVIDUAL_SWITCH})
  }, []);

  const router = useRouter()
  return (
    <>
      <div className="mx-auto w-full lg:w-5/6   rounder-xl shadow-2xl mt-8  ">
          <div className="grid  lg:grid-cols-4 lg:gap-4 gap-2 justify-center items-start ">
             <div className="lg:col-span-2 border ml-4 py-4"> 
                <div className="flex flex-col ml-4justify-center items-start lg:w-full md:p-8 ">
                    <div className="p-2 py-8 lg:p-8"><EkonomikSwitchType /></div>
                    <div className="p-2 py-8 lg:p-8"> <EkonomikSelectColor /> </div>
                </div>
                <div className="w-full lg:w-3/4 lg:ml-16 lg:mt-32"> 
          <button className="w-full   focus:outline-none text-gray-800 mb-12   hover:bg-yellow-600 hover:text-gray-300 px-24 p-4 mt-8  24 border border-yellow-600 rounded-md" 
           onClick={() => router.push('/')}
          >
           Αρχική...
           </button>
          </div>     
             </div>
             <div className="lg:col-span-2 border lg:p-6 "> 
             {value.currentSwitch ? 
                <Product product={value.currentSwitch[0]} /> :<img src={image} alt={''} /> }
             </div>
          </div>
          
         
      </div>
    </>
  );
  {
    /* <button className="focus:outline-none px-24 p-4 24" onClick={ () => dispatch({type:FETCH_INDIVIDUAL_SWITCH })}> Search </button> */
  }
};

export default EkonomikProductList;
