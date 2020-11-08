import React from 'react';
import { useSelector } from 'react-redux';
import Loader from '../Loader';

const withLoader = (WrappedComponent) => {
  const InnerComponent = ({ isLoading }) => {
    const trend = useSelector((state) => state.trend);
    const { dataPointLoading } = trend;

    if (dataPointLoading) {
      return <Loader />;
    } else {
      return <WrappedComponent isLoading={isLoading} />;
    }
  };
  return InnerComponent;
};
export default withLoader;
