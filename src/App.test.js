import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});


describe('api call', () => {

  it('calls foursquare api', () => {
      let response = '';
      expect(response).toBe('200');
  })
})
