import React, { useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import Error from "../Error";
import { attemptResetPassword } from "../../store/thunks/auth";
import { AppStateType } from "../../entities";

interface ILoginResetPasswordProps {
}
interface IFormValues {
  password: string
}
interface IParams {
  token: string
}

const LoginResetPassword: React.FC<ILoginResetPasswordProps> = () => {
  const { isAuth } = useSelector((state: AppStateType) => state.user);
  const { token } = useParams<IParams>();
  const [serverError, setServerError] = useState("");

  const dispatch: any = useDispatch();

  const initialValues: IFormValues = {
    password: "",
  };

  const validationSchema = Yup.object({
    password: Yup.string().min(5).max(255).required("Required"),
  });

  const onSubmit = (values: IFormValues) => {
    const password = values.password;
    dispatch(attemptResetPassword(password, token)).catch((error: any) => {
      if (error.response) {
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
                <label htmlFor='password'>Password</label>
                <Field id='password' name='password' type='password' placeholder='Password' />
                <ErrorMessage name='password' component={Error} />
              </div>
              <button type='submit' disabled={!formik.dirty || !formik.isValid}>
                Reset password
              </button>
              {serverError && <Error>{serverError}</Error>}
            </Form>
          </div>
        );
      }}
    </Formik>
  );
}

export default LoginResetPassword;