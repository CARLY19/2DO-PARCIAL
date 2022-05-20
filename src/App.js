import Card from './Card';

import './App.css';

function App() {
  
  const arrEstilos = ["red","purple","blue"];
  
  return (
    <div className="App">
     {arrEstilos.map( estilo => (<Card color={estilo} />) )}
    </div>
  );
}

export default App;
