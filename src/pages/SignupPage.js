import React from 'react'
import axios from 'axios';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextInput } from './../components/TextInput';

const SignupPage = () => {
  return (
    <Formik
      initialValues={{ 
        email: "",
        password: "",
        passwordConfirmation: ""
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Email no válido')
          .required('Se requiere email'),
        password: Yup.string()
          .min(8, 'Debe tener al menos 8 caracteres')
          .max(72, 'No debe tener más de 72 caracteres')
          .required('Se requiere contraseña'),
        passwordConfirmation: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden')
          .required('Se requiere confirmación de contraseña')
      })}
      onSubmit={(data, {setSubmitting}) => {
        // setSubmitting(true) para deshabilitar el spameo del button submit
        setSubmitting(true);
        console.log('submit: ', data);
        // make async call
        axios.post('http://localhost:3001/users/create', { user: {
        'email': data.email,
        'password': data.password,
        'password_confirmation': data.passwordConfirmation
        }}).then(response => {
          console.log('Returned data:', response)
          setSubmitting(false);
        }).catch(response => {
          console.log('respuesta en error', response)
          setSubmitting(false);
        });
        // despues de que termine el async call
        console.log('antes del sebSubmitting set false');
      }}
      >
      {({ values, isSubmitting }) => (
        <Form>
          <div>
            <TextInput
              label="Correo electrónico"
              name="email"
              type="text"
            />
          </div>
          <div>
            <TextInput
              label="Contraseña"
              name="password"
              type="text"
            />
          </div>
          <div>
            <TextInput
              label="Confirmar contraseña"
              name="passwordConfirmation"
              type="text"
            />
          </div>
          <div>
            <button disabled={isSubmitting} type="submit">Submit</button>
          </div>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  )
}

export default SignupPage