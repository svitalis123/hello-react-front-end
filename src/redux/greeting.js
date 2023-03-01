const url = 'http://localhost:8000/api/v1/messages';

export const fetchGreeting = () => async (dispatch) => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log('ddf is', json.content);
    dispatch({ type: 'FETCH_GREETING', payload: json.content });
  } catch (error) {
    console.error(error);
  }
};

const initialState = { greetings: '' };

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_GREETING':
      return { greetings: action.payload };
    default:
      return state;
  }
};
