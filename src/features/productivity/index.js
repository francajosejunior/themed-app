import React from 'react';
import './styles.scss';
import Alert from '../../components/alert';
import IconEye from '../../components/iconEye';

const Productivity = () => {
  return (
    <div className="font-color-label">
      <Alert icon={<IconEye locked />}>Produtividade</Alert>
    </div>
  );
};

export default Productivity;
