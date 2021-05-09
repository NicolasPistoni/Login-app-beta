import React from 'react';

 import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';

 

 const SignupSchema = Yup.object().shape({

   firstName: Yup.string()

     .min(2, 'Too Short!')

     .max(50, 'Too Long!')

     .required('Required'),

   lastName: Yup.string()

     .min(2, 'Too Short!')

     .max(50, 'Too Long!')

     .required('Required'),

   email: Yup.string().email('Invalid email').required('Required'),

 });

 

const Validations = () => (

   <div>

     <h1>Signup</h1>

     <Formik

       initialValues={{

         firstName: '',

         lastName: '',

         email: '',

       }}

       validationSchema={SignupSchema} //otra forma de cargar las validaciones, solo valido si pongo Formik en JSX como aca

       onSubmit={values => {

         // same shape as initial values

         console.log(values);

       }}

     >

       {({ errors, touched }) => (

         <Form>

           <Field name="firstName" />

           {errors.firstName && touched.firstName ? (

             <div>{errors.firstName}</div>

           ) : null}

           <Field name="lastName" />

           {errors.lastName && touched.lastName ? (

             <div>{errors.lastName}</div>

           ) : null}

           <Field name="email" type="email" />

           {errors.email && touched.email ? <div>{errors.email}</div> : null}

           <button type="submit">Submit</button>

         </Form>

       )}

     </Formik>

   </div>

 );
 
 export default Validations

/*<input   VALIDACION DE FORMA MAS NUMERICA
              id="rank"
              placeholder="Enter your email"
              type="number"
              value={values.rank}
              onChange={e => {
                e.preventDefault();
                const { value } = e.target;
                const regex = /^(0*[1-9][0-9]*(\.[0-9]*)?|0*\.[0-9]*[1-9][0-9]*)$/;
                if (regex.test(value.toString())) {
                  setFieldValue("rank", value);
                }
              }}
              onBlur={handleBlur}
              
              
              */ 
 
/* onSubmit: ({valor inicial},onSubmitProps) => { VALIDACIONES DISPARADAS POR EL SUBMIT
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
	      
        }*/
