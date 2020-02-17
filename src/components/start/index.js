import React from 'react';
import MaterialIcon from 'material-icons-react';
import './styles.scss';

const Star = ({ icon }) => {
  return (
    <div className="font-color-star">
      <MaterialIcon icon={icon} size="small" inactive={true} />
    </div>
  );
};

export default Star;
