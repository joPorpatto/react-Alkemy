import React from 'react'
import { useSelector } from 'react-redux'
import { TeamCard } from '../team/TeamCard'

export const Heroes = () => {

         const {current} = useSelector(state => state.hero)     

        return (
                <div>
                        <hr/>
                                <div className="divider">
                                         <br/>                        
                                         <div className="row row-cols-1 row-cols-md-3 ">
                        
                                           {
                                                (!!current)&&
                                                current.map(hero=>(
                                                <TeamCard
                                                                key={hero.id}
                                                                {...hero}
                                                        />
                                                
                                                 ))
                                                
                                         }
                                          </div>
                                </div>
                                <hr className="mt-10 mb-3"/>


                </div>
        )
}
