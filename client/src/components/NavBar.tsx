import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppStateType } from "../entities";

interface INavBarProps {
}

const NavBar: React.FC<INavBarProps> = ({}) => {
  const { isAuth, user } = useSelector((state: AppStateType) => state.user);

  return (
    <nav className='nav'>
      <NavLink className='inactive ' activeClassName='active' to='/home'>
        Home
      </NavLink>

      {isAuth ? (
        <div>
          <NavLink className='inactive' activeClassName='active' to='/my-profile'>
            {user?.username}
          </NavLink>
          <NavLink className='inactive logout' activeClassName='active' to='/logout'>
            Logout
          </NavLink>
        </div>
      ) : (
        <div>
          <NavLink className='inactive' activeClassName='active' to='/login'>
            Login
          </NavLink>
          <NavLink className='inactive ' activeClassName='active' to='/register'>
            Register
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default NavBar;