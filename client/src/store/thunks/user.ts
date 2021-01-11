import { Dispatch } from 'redux'
import { getUser } from "../../helpers/api/user";
import { setUser, resetUser } from "./../actions/user";

export const attemptGetUser = () => async (dispatch :Dispatch) =>
  await getUser()
    .then((res) => {
      if(res.data.user) {dispatch(setUser(res.data.user));}
      else {dispatch(resetUser())}
    })
    .catch(() => dispatch(resetUser()));
