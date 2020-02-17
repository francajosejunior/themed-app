import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchUserLevelAction,
  userLevelSelector,
  userLevelIconsSelector
} from './slice';
import './styles.scss';
import Star from '../../components/start';

const UserLevel = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserLevelAction());
  }, [dispatch]);
  const userLevel = useSelector(userLevelSelector);
  const icons = useSelector(userLevelIconsSelector);

  return (
    <div className="user-level bg-secondary font-color-label">
      <span className="user-level-text">
        Olá, você está na classificação de equipe &nbsp;
        <strong>{userLevel.levelText}</strong> &nbsp;,{userLevel.msg} &nbsp;
        <strong className="click">Clique aqui </strong> &nbsp; para ver os
        níveis existentes!
      </span>
      <div className="user-level-stars">
        {icons.map((x, index) => (
          <Star icon={x} key={index} />
        ))}
      </div>
    </div>
  );
};

export default UserLevel;
