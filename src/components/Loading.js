import React from 'react'
import { useSelector } from 'react-redux'

export const Loading = () => {
        
        
        const {loading} = useSelector(state => state.hero)
        console.log(loading,12)
        return (
                <div>
                        {(loading)&&
                        <div class="container text-center mt-4">
                                
                                <div class="spinner-border " role="status">
                                        <span class="visually-hidden">Loading...</span>
                                        </div>
                                </div>
                        }
                </div>
        )
}
