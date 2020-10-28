import React from 'react'

const ModulProduct = ({ sw }) => {
    return (
        <div>
        {/*  IF 2 images in switch image array then calc css accordingaly */}
        { sw.image.length === 1 ? /* 1M */
        
            <div className="relative"> 
            <div className="relative"> <img src={ sw.frame.image.formats.small.url} alt={'not found '} />  
                <div className=" absolute top-0 -mt-6 ml-26 switch "> <img className="switch md:mt-26 transform scale-y-58 scale-x-75"  src={sw.image[0].formats.small.url} alt={'not found'} 
                    style={{ clipPath: `inset(36px 0px 33x 0px)`}}
                /></div>
            </div>            

            </div>
      

        : /* 2M */
            <div className="relative">
                <div> <img src={ sw.frame.image.formats.small.url} alt={'not found '} />  </div>            
            </div> 
        }
        </div>
    )
}

export default ModulProduct
//   {/* 28px 0px 32px 40px */}