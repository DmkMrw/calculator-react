import './app.scss';

const App = () => {
  return (
    <div className="calc-container">
      <div className="output">
        <div className="prev-operation"></div>
        <div className="curr-operation"></div>
      </div>
      <button className="function-button">AC</button>
      <button className="function-button">DEL</button>
      <button className="function-button">/</button>
      <button className="function-button">%</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button className="function-button">x</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button className="function-button">+</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button className="function-button">-</button>
      <button>00</button>
      <button>0</button>
      <button>.</button>
      <button className="function-button">=</button>
    </div>
  );
}

export default App;