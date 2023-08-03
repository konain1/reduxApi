import React from 'react'
import { useSelector } from 'react-redux'
function Products() {

    const data = useSelector((state)=>state.red.apiData)

    console.log(data)

    
  return (
    <div>
    <table>
    {

        data.products?.map((item,index)=>{
            return(
                <>
                    <p>{item.brand}</p>
                </>
            )
        })
    }

    </table>
    
    </div>
  )
}

export default Products
