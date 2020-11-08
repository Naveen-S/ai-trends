import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSuits } from './actions/suitsAction';
import {
  fetchDataPoints,
  fetchDates,
  fromChanged,
  toChanged,
} from './actions/trendAction';
import Card from './components/Card/Card';
import Dropdown from './components/Dropdown';
import Header from './components/Header/Header';
import TrendChart from './components/Trend/TrendChart';
import './styles/main.css';

function App() {
  const [showLess, setShowLess] = useState(true);
  const dispatch = useDispatch();
  const suitsObj = useSelector((state) => state.suits);
  const trend = useSelector((state) => state.trend);
  const { suits } = suitsObj;
  const { fromTo, dataPoints, from, to } = trend;

  useEffect(() => {
    dispatch(fetchDataPoints());
    dispatch(fetchDates());
    dispatch(fetchSuits());
  }, [dispatch]);

  console.log('re-render ', dataPoints);
  return (
    <div className='App'>
      <Header />
      <div className='flex p-4'>
        <span className='flex text-indigo-600 items-center w-200 mr-5 font-bold'>
          Filter the Trend
        </span>
        <div className='flex mr-3'>
          <Dropdown
            options={fromTo}
            onSelectedChange={(e) => dispatch(fromChanged(e.value))}
            value={from}
            placeholder='From'
          />
        </div>
        <div className='flex'>
          <Dropdown
            options={fromTo}
            onSelectedChange={(e) => dispatch(toChanged(e.value))}
            value={to}
            placeholder='To'
          />
        </div>
      </div>
      {dataPoints.length > 0 && (
        <TrendChart
          type='column'
          axisX={{ title: 'Dates' }}
          trendChartData={[...dataPoints]}
        />
      )}
      <span className='flex text-indigo-600 text-sm justify-end p-2 font-light'>
        * Right click and select to zoom!
      </span>
      <div className='mt-20 p-5  bg-indigo-100'>
        <h3 className='font-semibold text-3xl text-center p-3 text-indigo-800'>
          Collections
        </h3>
        <div className='flex w-full flex-wrap justify-evenly'>
          {suits.length > 0 &&
            suits
              .filter((item, i) => {
                if (showLess && i > 2) {
                  return false;
                }
                return true;
              })
              .map((suit) => {
                return (
                  <Card
                    key={suit.id}
                    name={suit.name}
                    price={suit.price}
                    image={suit.image}
                  />
                );
              })}
        </div>
        <div className='flex justify-end '>
          <button
            className='bg-indigo-800 text-white p-3 m-2 rounded w-1/12 hover:bg-indigo-600 transition ease-in duration-150'
            onClick={() => {
              setShowLess((prevShowLess) => {
                return !prevShowLess;
              });
            }}>
            {showLess ? 'More' : 'Less'}
          </button>
        </div>
      </div>

      <div className='bg-indigo-700 text-indigo-300 text-center p-3 items-cente mt-5'>
        <p> Copyright &copy; Suits 2020 - Infinity</p>
      </div>
    </div>
  );
}

export default App;
