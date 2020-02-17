import React from 'react';
import MaterialIcon from 'material-icons-react';
import './styles.scss';
import Alert from '../../components/alert';

const Productivity = () => {
  return (
    <div className="font-color-label">
      <Alert
        icon={
          <MaterialIcon icon="remove_red_eye" size="small" inactive={true} />
        }
      >
        Produtividade
      </Alert>
    </div>
  );
};

export default Productivity;
