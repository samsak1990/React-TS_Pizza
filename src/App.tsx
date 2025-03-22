import React, {FC} from 'react';
import './App.css';
import AddPizzaForm from './components/AddPizzaForm';


let pizza: string = 'Salami'
pizza = 'dd  '


const App: FC = () => {
  return (
    <div className="App">
      <div className="wrap">
        <span className='heading'>Наша пиццерия</span>
        <AddPizzaForm></AddPizzaForm>
      </div>
    </div>
  );
}

export default App;
