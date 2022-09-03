import { useState } from 'react';
import './app.scss';

const App = () => {

  const [res, setRes] = useState('');
  const [act, setAct] = useState('');
  const [num, setNum] = useState('');
  const [oper, setOper] = useState('');
  const [snum, setSNum] = useState('')

  // console.log('res', res);
  console.log('act', act);
  console.log('num', num);
  console.log('oper', oper);
  console.log('snum', snum);
  console.log('===============================================');



  const handleStart = (val) => {
    if (val === '.' && act.includes('.') ) {
      return
    }
    setAct((prev) => prev + val)

    if (!snum && !oper && val !== 'x' && val !== '/' && val !== 'del' && val !== '+' && val !== '-') {
      if (val === 'zero') val = `00`
        if (val === '.' && num.includes('.')) {
      return
    }
      setNum((prev)=> prev + val);
    }

    if (num && (val === '/' || val === '+' ||val === 'x' || val ==='-' )) {
        setOper(val);
    }

    if (num && oper) {
      setSNum((prev) => prev + val)
    }

    if (res && (val === '/' || val === '+' || val === 'x' || val === '-')) {
      setNum(res)
      setOper(val)
      setAct(`${res} ${val} `)
      setSNum('')
    }
  }

  const handleCount = (num, snum, oper) => {
    let one = num;
    let two = snum;
    if (oper === 'x') oper = '*'
    let operation = oper;



    let result = one + operation + two;
    let res = eval(result)
    setRes(res)
    // setAct('')
  }
  const deleteAll = () => {
    setRes('');
    setAct('');
    setNum('');
    setOper('');
    setSNum('')
  }

  const del = (val) => {
    setAct(val.substring(0, val.length - 1))
    if (!oper) {
      setNum(num.substring(0, num.length - 1))
    }
    if (oper) {
      setSNum(snum.substring(0, snum.length - 1))
    }
  }

  return (
    <div className="calc-container">
      <div className="output">
        <div className="prev-operation">{!act ? '' : act}</div>
        <div className="curr-operation"> {!res ? '0' : res}</div>
      </div>
      <button onClick={()=> deleteAll()} className="function-button">AC</button>
      <button  onClick={()=> del(act)} className="function-button">DEL</button>
      <button  onClick={()=> handleStart('/')} className="function-button">/</button>
      <button  onClick={()=> handleStart('-')} className="function-button">+/-</button>
      <button onClick={()=> handleStart(1)}>1</button>
      <button onClick={()=> handleStart(2)}>2</button>
      <button onClick={()=> handleStart(3)}>3</button>
      <button  onClick={()=> handleStart('x')} className="function-button">x</button>
      <button onClick={()=> handleStart(4)} >4</button>
      <button onClick={()=> handleStart(5)} >5</button>
      <button onClick={()=> handleStart(6)} >6</button>
      <button onClick={()=> handleStart('+')} className="function-button">+</button>
      <button onClick={()=> handleStart(7)}>7</button>
      <button onClick={()=> handleStart(8)}>8</button>
      <button onClick={()=> handleStart(9)}>9</button>
      <button onClick={()=> handleStart('-')} className="function-button">-</button>
      <button onClick={()=> handleStart('00')}>00</button>
      <button onClick={()=> handleStart(0)}>0</button>
      <button onClick={()=> handleStart('.')}>.</button>
      <button onClick={()=> handleCount(num, snum, oper)} className="function-button">=</button>
    </div>
  );
}

export default App;