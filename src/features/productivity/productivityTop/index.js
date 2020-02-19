import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Alert from '../../../components/alert';
import IconEye from '../../../components/iconEye';
import {
  isProductivityVisibleSelector,
  toggleProductivityVisibility
} from '../slice';

const ProductivityTop = () => {
  const dispatch = useDispatch();
  const isProductivityVisible = useSelector(isProductivityVisibleSelector);

  return (
    <Alert
      icon={
        <IconEye
          onClick={() => dispatch(toggleProductivityVisibility())}
          locked={!isProductivityVisible}
        />
      }
    >
      Produtividade
    </Alert>
  );
};

export default ProductivityTop;
