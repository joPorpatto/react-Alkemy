import { Field, Form, Formik } from 'formik'
import { useDispatch } from 'react-redux'
import { searchHero } from '../actions/hero'
import { Heroes } from './hero/Heroes'
import { Navbar } from './Navbar'
import { Team } from './team/Team'

const HomeScreen = () => {

        const dispatch = useDispatch()       


        return (
                <> 
                        <div className="top-header py-4 mt-4">
                                <div className="container text-center text-white">
                                        <h1>Challenge react</h1>
                                </div>
                        </div>
                
                                
                        <Navbar/>    

                        <Team/>  

                        <Formik
                                initialValues = {{name:""}}
                                validate={ (values)=>{
                                        let errores={};
                                        if (!values.name) {
                                                errores.name="campo vacío"
                                                
                                        }else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
                                                errores.name = "El nombre debe poseer solo caracteres válidos"
                                        }
                                        return errores;

                                }}
                                onSubmit={
                                        (values,{resetForm})=>{
                                                resetForm();
                                                dispatch(searchHero(values))

                                        }
                                }
                        >
                                {({values,errors,handleSubmit,handleChange,handleBlur})=>(

                                        <Form onSubmit={handleSubmit}>
                                                <nav className="navbar d-flex justify-content-center  navbar-expand-md mt-4 navbar-dark bg-dark ">
                                                        <div className="m-2 ">

                                                                <div className="  d-flex justify-content-center">                                       
                                                                        
                                                                        <Field 
                                                                                className="form-control me-2" 
                                                                                type="text" 
                                                                                placeholder="Ingresar heroe..." 
                                                                                name="name"
                                                                                value={values.name}
                                                                                onChange={handleChange}
                                                                                onBlur={handleBlur}
                                                                                autoComplete="off"
                                                                        />
                                                                        <button         
                                                                                className="btn btn-outline-success"     
                                                                                type="submit"  
                                                                                value="Buscar"                                                      
                                                                                
                                                                                >Buscar</button>
                                                                                        

                                                                </div >
                                        
                                                                        {errors.name && 
                                                                        <p className="error ">{errors.name}</p>}
                                                        </div>
                                                        
                                                        
                                                </nav>
                                        </Form>
                                )}

                        </Formik>


                        
                        <Heroes/>
                        
                </>

                
        )
}

export default HomeScreen


