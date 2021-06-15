import React,{useState} from 'react'
import data from './data'
import SingleQuestion from './SingleQuestion'
function App() {
  const [question, setQuestion] = useState(data)
  return (
    <main>
    <div className='container'>
      <h3>questions and answers about login</h3>
      <section className='info'>
        {question.map((ques) => {
          return (
            <SingleQuestion key={ques.id} {...ques}></SingleQuestion>
          );
        })}
      </section>
    </div>
  </main>
    
  );
}

export default App;
