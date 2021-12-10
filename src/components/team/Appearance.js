import React from 'react'
import { useSelector } from 'react-redux'

export const Appearance = () => {



        const {height,weight,team} = useSelector(state => state.hero)

       

        const heightNotNullTotal = team.filter((hero)=>{
                if (Number(hero.appearance.height[1].slice(0,3))) {
                        return hero                        
                } 
        })
        const weightNotNullTotal = team.filter((hero)=>{
                if (Number(hero.appearance.weight[0].slice(0,3))) {
                        return hero                        
                }
        })

        const h = height/(heightNotNullTotal.length)
        const w =weight/(weightNotNullTotal.length)

        return (
               <div  className="container border pb-4">

                        <div className="card text-center mt-4 ms-2 me-2 bg-dark text-white">
                                
                                <div className="card-body">
                                        Altura promedio:  {h.toFixed(0)}
                                        <br/>
                                        Peso promedio:  {w.toFixed(0)}
                                        
                                </div>
                                
                        </div>
                </div>
        )
}
