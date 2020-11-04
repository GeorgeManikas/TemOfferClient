import React, { useContext } from "react";
import SwitchContext from '../context/SwitchContext'
import Link from "next/link";
import { FETCH_SERIE } from "../context/types";

const SeriesPicker = ({ series }) => {

  const { dispatch } = useContext(SwitchContext)
  return (
    <div className="mx-auto text-center mt-12">
      {series.map((serie) => (
        <>
          <Link href={serie.serie} passHref>
            <div
              onClick={()=> dispatch({type:FETCH_SERIE, payload: serie.serie})}
              key={series.id}
              className="flex flex-row w-full  md:w-4/6 lg:w-3/6 justify-between mx-auto   p-8 m-8 text-center text-4xl items-baseline cursor-pointer text-gray-800 bg-orange-500  rounded-md shadow-md 
                    hover:bg-orange-600 hover:shadow-xl"
            >
              
              <div>
                {" "}
                <img src={serie.image} alt={serie.image} />{" "}
              </div>
            </div>
          </Link>
        </>
      ))}
    </div>
  );
};

export default SeriesPicker;
