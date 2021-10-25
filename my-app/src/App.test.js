import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();


  function MyFun(){
    document.location='https://tuwaiq.edu.sa/'
  }
  
  const btn =  <button onClick={MyFun} >click</button>;
  ReactDOM.render(btn, document.getElementById('root'));
});