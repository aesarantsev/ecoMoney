import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";

import { attemptLogin } from "../../store/thunks/auth";
import Error from "../Error";
import { AppStateType } from "../../entities";

interface ILoginProps {
}
interface IFormValues {
  username: string,
  password: string
}

const Login: React.FC<ILoginProps> = ({}) => {
  const { isAuth } = useSelector((state: AppStateType) => state.user);
  const [serverError, setServerError] = useState("");

  const dispatch: any = useDispatch();

  const initialValues: IFormValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().min(3).max(50).required("Required"),
    password: Yup.string().min(5).max(255).required("Required"),
  });

  const onSubmit = (values: IFormValues) => {
    dispatch(attemptLogin(values)).catch((error: any) => {
      if(error.response) {
        setServerError(error.response.data.message);
      }
    });
  };

  return isAuth ? (
    <Redirect to='/home' />
  ) : (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {(formik) => {
        return (
          <div className='container'>
            <Form className='form'>
              <div className='field'>
                <label htmlFor='username'>Username</label>
                <Field id='username' name='username' type='text' placeholder='Username' />
                <ErrorMessage name='username' component={Error} />
              </div>
              <div className='field'>
                <label htmlFor='password'>Password</label>
                <Field id='password' name='password' type='password' placeholder='Password' />
                <ErrorMessage name='password' component={Error} />
              </div>
              <div>
                <Link to='/login/forgot'>Forgot your password?</Link>
              </div>
              <button type='submit' disabled={!formik.dirty || !formik.isValid}>
                Login
              </button>
              {serverError && <Error>{serverError}</Error>}
            </Form>
            <b>Or</b>
            <Link to='/register'>Sign Up</Link>
          </div>
        );
      }}
    </Formik>
  );
}

export default Login;
