import React from 'react';
import axios from 'axios';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { fetchProfile } from '../../actions/userActions';
import { TextInput } from '../../components/TextInput';
import UserHeader from '../../components/headers/UserHeader';

const CreateProfilePage = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const token = useSelector(state => state.userReducer.token)

  return (
    <div>
      <UserHeader />
      <Formik
        enableReinitialize={true}
        initialValues={{
          token: token,
          fullname: "",
          occupation: "",
          biography: "",
          coffee_price: "",
          currency_sign: ""
        }}
        validationSchema={Yup.object({
          fullname: Yup.string()
            .min(2, 'Debe tener al menos 2 caracteres')
            .max(72, 'No debe tener más de 72 caracteres')
            .required('Se requiere un nombre'),
          occupation: Yup.string()
            .min(3, 'Debe tener al menos 3 caracteres')
            .max(72, 'No debe tener más de 72 caracteres')
            .required('Se requiere una ocupación'),
          biography: Yup.string()
            .min(3, 'Debe tener al menos 3 caracteres')
            .max(72, 'No debe tener más de 255 caracteres')
            .required('Se requiere una ocupación'),
          coffee_price: Yup.number()
            .max(6, 'No debe tener más de 6 caracteres')
            .required('Se requiere monto de un café'),
          currency_sign: Yup.string()
            .min(1, 'Debe tener al menos 1 carácter')
            .max(3, 'No debe tener más de 3 caracteres')
            .required('Se requiere un símbolo de moneda')
        })}
        onSubmit={(data, { setSubmitting }) => {
          // setSubmitting(true) para deshabilitar el spameo del button submit
          setSubmitting(true);
          // make async call
          const url = 'http://localhost:3001/profiles/create'
          const options = {
            method: 'POST',
            headers: { 'Authorization': "Bearer " + data.token },
            data: {
              profile: {
                'fullname': data.fullname,
                'occupation': data.occupation,
                'biography': data.biography,
                'coffee_price': data.coffee_price,
                'currency_sign': data.currency_sign
              }      
            },
            url,
          };
          axios(options).then(response => {
            setSubmitting(false);
            console.log(response);
            dispatch(fetchProfile(token))
            history.push(`/`);
          }).catch(err => {
            setSubmitting(false);
            console.log(err)
          })
          // .then(response => {
          //   console.log('Returned data:', response)
          //   console.log("profile data: ", profileData)
          // })
          // .catch(response => {
          //   console.log('respuesta en error', response)

          // })
          // .finally(setSubmitting(false));
          // // despues de que termine el async call
          // console.log('antes del sebSubmitting set false');
        }}
      >
        {({ isSubmitting }) => (
          <Form className="form-container">
            <div className="form card-panel grey lighten-3">
              <h6>Tus datos</h6>
              <div>
                <TextInput
                  label="Nombre"
                  name="fullname"
                  type="text"
                />
              </div>
              <div>
                <TextInput
                  label="Ocupación"
                  name="occupation"
                  type="text"
                />
              </div>
              <div>
                <TextInput
                  label="Biografía"
                  name="biography"
                  type="text"
                />
              </div>
              <div>
                <TextInput
                  label="Monto de un café"
                  name="coffee_price"
                  type="number"
                />
              </div>
              <div>
                <TextInput
                  label="Símbolo de la moneda"
                  name="currency_sign"
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
  )
}

export default CreateProfilePage