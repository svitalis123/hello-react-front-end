import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreeting } from '../redux/greeting';

export default function Greeting() {
  const data = useSelector((state) => state.greeting);
  console.log(data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);
  return (
    <div>
      <h2>
        {data.greetings}
        {' '}
      </h2>
    </div>
  );
}
