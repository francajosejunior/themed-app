import React from 'react';
import MaterialIcon from 'material-icons-react';
import './styles.scss';
import Alert from '../../components/alert';

const Productivity = () => {
  return (
    <div>
      <Alert icon={<MaterialIcon icon="eye" size="small" inactive={true} />}>
        Produtividade
      </Alert>
    </div>
  );
};

export default Productivity;
