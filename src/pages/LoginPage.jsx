import React from 'react'
import axios from 'axios';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom'
import { TextInput } from './../components/TextInput';
import UserHeader from '../components/headers/UserHeader';
import '../../src/styles/idk.css';

const LoginPage = () => {
  return (
    <div>
      <UserHeader />
      <div className="signup-main white">
        <div className="form__title">
          <Link to="/" className="home-link left-align"><h6>Ir Atrás</h6></Link>
          <h5 className="center-align">Login</h5>
        </div>
        <div className="signup-form">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email('Email no válido')
                .required('Se requiere email'),
              password: Yup.string()
                .min(8, 'Debe tener al menos 8 caracteres')
                .max(72, 'No debe tener más de 72 caracteres')
                .required('Se requiere contraseña'),
            })}
            onSubmit={(data, { setSubmitting }) => {
              // setSubmitting(true) para deshabilitar el spameo del button submit
              setSubmitting(true);
              console.log('submit: ', data);
              // make async call
              axios.post('http://localhost:3001/user_token', {
                auth: {
                  'email': data.email,
                  'password': data.password,
                }
              }).then(response => {
                console.log('Returned data:', response)
                setSubmitting(false);
                axios.get('http://localhost:3001/profile/data', {
                  headers: {
                    'Authorization': "Bearer " + response.data.jwt
                  }
               }).then(response => {
                 console.log('Profile data:', response)
               }).catch(response => {
                console.log('respuesta en error', response)
               })
              }).catch(response => {
                console.log('respuesta en error', response)
                setSubmitting(false);
              });
              // despues de que termine el async call
              console.log('antes del sebSubmitting set false');
            }}
          >
            {({ isSubmitting }) => (
              <Form className="form-container">
                <div className="form card-panel grey lighten-3">
                  <h6>Tus datos</h6>
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
                </div>
                <div className="btn-container">
                  <button className="pink lighten-2 btn waves-effect waves-light" disabled={isSubmitting} type="submit">Entrar</button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default LoginPage