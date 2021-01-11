import React from "react";
import { useSelector } from "react-redux";
import { AppStateType } from "../entities";

interface IProfileProps {
}

const Profile: React.FC<IProfileProps> = ({}) => {
  const { username } = useSelector((state: AppStateType) => state.user.user);

  return (
    <div className='container'>
      <p>
        Hey <b>{username}</b> ! Check the github repository:
      </p>
      <a href='https://github.com/flaviuse/mern-authentification'>
        https://github.com/flaviuse/mern-authentification
      </a>
    </div>
  );
};

export default Profile;
