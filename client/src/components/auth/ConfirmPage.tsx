import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import { AppStateType } from "../../entities";
import { attemptGetConfirmation } from "../../store/thunks/auth";
import Error from "../Error";

interface IConfirmPageProps {}
interface IParams {
  token: string
}

const ConfirmPage:React.FC<IConfirmPageProps> = () => {
  const { isAuth } = useSelector((state: AppStateType) => state.user);
  const [serverError, setServerError] = useState("");
  const dispatch: any = useDispatch();
  const { token } = useParams<IParams>();

  function doSubmit() {
    dispatch(attemptGetConfirmation(token))
      .catch((error: any) => {
        if (error.response) {
          setServerError(error.response.data.message);
        }
      });
  }

  return isAuth ? (
    <Redirect to='/home' />
  ) : (
    <div className='container'>
      <p>Click here to confirm your email</p>
      <button onClick={doSubmit}>Confirmation</button>
      {serverError && <Error>{serverError}</Error>}
    </div>
  );
}

export default ConfirmPage;