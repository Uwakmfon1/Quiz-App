import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



// build a quiz app in react 
//pseudo_code/algorithm:https://chatgpt.com/share/68e0a444-8784-8007-94e6-ab556862df55


function Quiz() {

  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  useEffect(() => {
    const fetchQuiz = async () => {
      const apiUrl = 'http://localhost:8001/questions';

      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setData(data);        
      } catch (err) {
        console.log('Error fetching data', err);
      } finally {
        setLoading(false);
      }
    };
    fetchQuiz();
  }, []);
    
  
  const handleSelect = (questionId, answer) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  if (loading) return <p className="text-center">Loading quiz...</p>;

  return (
    <>
      <div className='m-20 w-full'>        
          <div className=''>
            <div className=''>
              <h1 className='text-2xl font-bold  bg-blue-200 m-0 p-0 mb-10'>Quiz App</h1>
              <div>               
                {console.log(data)}
                {data.map((datum) => (
                  <div key={datum.id} >
                    <p>{datum.question}</p>
                    {Object.entries(datum.answers).map(([key, value]) => (
                      <label key={key} className='flex items-center'>
                        <input
                         type="radio" 
                         name={`question-${datum.id}`} 
                         value={value} 
                         checked={selectedAnswers[datum.id] ===value}
                         onChange={()=>handleSelect(datum.id, value)}
                         className='cursor-pointer'
                         />
                        <p>{value}</p>
                      </label>
                    ))}                   
                  </div>
                ))}
                 <button 
                      onClick={()=>console.log(selectedAnswers)}
                      className='bg-white-300'
                    >
                      Submit
                    </button>
              </div>
            </div>
          </div>    
      </div>

    </>
  )
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)} className='bg-blue-200 px-2 py-2'
      >Increment</button>
      <button onClick={() => setCount(count - 1)} className='bg-red-200 px-2 py-2'
      >Decrement</button>
    </>
  )
}

export default Quiz
// export default App
