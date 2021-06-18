import React, { useState } from "react";
import List from './components/List'
import Aleret from './components/Alert'
function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = { id: new Date().getTime().toString(), title: name };

    setList([...list, newItem]);
    setName('');

  }
  return (
    <section className="section-center">
      <form className='grocery-form' onSubmit={handleSubmit}>
        <h3>grocery bud</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='e.g. eggs'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type='submit' className='submit-btn'>
            submit
          </button>
        </div>
      </form>
      <div className='grocery-container'>
        <List items={list} />
        <button className='clear-btn' >
          clear items
        </button>
      </div>
    </section>
  );
}

export default App;
