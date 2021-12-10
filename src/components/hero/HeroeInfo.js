import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'


export const HeroeInfo = () => {

        const {current} = useSelector(state => state.hero)
        const { heroId}= useParams()
        const heroFilter = current.filter( (heroes) =>(heroes.id===heroId))
        const hero = heroFilter[0]

        const funcionBack = (value) =>{                
                if ((value.slice(0,2)==0)) {
                        return "-"                        
                }else{return value}
        }


        
        
        return (
                <div className=" row justify-content-center mt-4 mb-4">
                        <div className="card "style={{width:"28rem"}} >
                                <div className="container mt-4 mb-4">
                                        <img src={hero.image.url} className=" mx-auto d-block" width="200" height="auto" alt={hero.name}/>

                                </div>
                                
                                <ul className="list-group list-group-flush">
                                        <li className="list-group-item"><b>Peso:</b>  {funcionBack(hero.appearance.weight[1])}</li>
                                        <li className="list-group-item"><b>Altura:</b> {funcionBack(hero.appearance.height[1])}</li>
                                        <li className="list-group-item"><b>Nombre:</b> {hero.name}</li>
                                        <li className="list-group-item"><b>Alias:</b> {hero.biography.aliases.map((alias)=>(
                                                <span key={alias}>{alias} - </span>
                                        ))}</li>

                                        <li className="list-group-item"><b>Color de ojos:</b> {hero.appearance["eye-color"]}</li>
                                        <li className="list-group-item"><b>Color de cabello:</b> {hero.appearance["hair-color"]}</li>
                                        <li className="list-group-item"><b>Lugar de trabajo:</b> {hero.work.base}</li>

                                </ul>
                                <div className="card-body mx-auto d-block">
                                        <Link className="" to={`./home}`}>
                                                Regresar
                                         </Link>
                                </div>
                                
                        </div>
                </div>
        )
}
