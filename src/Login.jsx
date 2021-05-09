import React from 'react'
import logIn from "./log-in.png";
import {useFormik} from 'formik'
import * as Yup from 'yup'
import Button from 'react-bootstrap/Button'
//import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css'





const Login = () => {

    const {handleSubmit, handleChange, values, touched, errors, handleBlur} = useFormik({ 
        initialValues: {
          DNI: '' ,
          City: ''
        },
        
        validationSchema: Yup.object({
          
          DNI: Yup.string('se espera numero').max(8,'el dni debe ser menor o igual a 8 caracteres ').required('Introduzca numeros'), //hacer que muestre que estoy poniendo un numero muy corto o incorrecto
          City: Yup.string().max (50,'Ponga una localidad existente').required('Ingrese ciudad') 
        }),
    
        onSubmit: ({DNI},onSubmitProps) => {
          var expreg = /^([0-9])*$/ //tratar de minimizar esto con ternarios o con alguna otra funcion

          if(expreg.test(DNI)){

           if (DNI.length < 7){ //cambiar luego por ternario que evalue que sea numerico y que este entre 7 y 9 caracteres
            alert('Esta poniendo un numero corto, el dni debe ser de 7 u 8 caracteres')
            onSubmitProps.resetForm();
            }

            else{
            alert(`Buenas tardes empleado con DNI: ${DNI}, tenga buena jornada`);
            onSubmitProps.resetForm(); //limpia los campos del formulario
            }   
          }

          else{
              alert('el dni es invalido, ponga caracteres numericos seguidos')
          }
	      
        }

      }) //hasta aca llega el useFormik:is a custom React hook that will return all Formik state and helpers directly.
       

      return (
        
        <form onSubmit={handleSubmit} className='form'>
          <header>
            Acceso remoto
            <img width="20" src={logIn} alt="log in" />
          </header>

          <label className='label' htmlFor="DNI">DNI:</label>

          <input
            value={values.DNI}
            onChange={handleChange}
            onBlur={handleBlur}
            id="DNI"
            name="DNI"
            type='text'
          /> 

           

          {touched.DNI && errors.DNI ? ( 
            <div>{errors.DNI}</div>
          ): null} 
          
          <label className='label' htmlFor="City">Ciudad:</label>
          <input
            value={values.City}
            onChange={handleChange}
            onBlur={handleBlur}
            id="City"
            name="City"
            type='text'
          /> 
          
          {touched.City && errors.City ? ( 
            <div>{errors.City}</div>
          ): null} 
          
          <label className='label'>Accion:  </label>

         

          

          <Button  className='boton' type='submit' > Entrar </Button>

          <Button variant="danger" type='reset' > Salir </Button> 



          
        

        </form>
      );

};

export default Login
