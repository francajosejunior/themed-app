import React from 'react';
import MaterialIcon from 'material-icons-react';
import './styles.scss';

const IconEye = ({ locked }) => {
  return (
    <div className="icon-eye">
      {locked && <div className="icon-eye-eye-locked bg-primary"></div>}
      <MaterialIcon icon="remove_red_eye" size="small" inactive={true} />
    </div>
  );
};

export default IconEye;
