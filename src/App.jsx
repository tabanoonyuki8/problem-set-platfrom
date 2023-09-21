import  { useState } from 'react';

function ProblemTable() {
  // input field namee
  const [problemName, setProblemName] = useState('');
  const [status, setStatus] = useState('');

  //store problem data 
  const [problems, setProblems] = useState([]);


  
  
  const handleSubmitBtn = (event) => {
    event.preventDefault();
   
    const newProblem = { problemName, status };
        const setNewProblem=[...problems, newProblem];
    setProblems(setNewProblem);
  //clear input
    setProblemName('');
    setStatus('');
  };
  const [filter, setFilter] = useState('All');
  
  const filteredProblems = () => {
    if (filter === 'All') {
      return problems;
    } else {
      return problems.filter((problem) => problem.status === filter);
    }
  };

  return (
    <div className='text-center'>
      <div>
   
    <h2 className='text-4xl font-bold text-center m-5'>Problem-1</h2>
      
      <form onSubmit={handleSubmitBtn}>
        <div>
          <label className='text-2xl m-2' htmlFor="problemName">Problem Name:</label>
          <input  
          className='border-2 border-black'
          placeholder='name'
            type="text"
            id="problemName"
            value={problemName}
            onChange={(event) => setProblemName(event.target.value)}
            required
          />
        </div>
        <div>
          <label className='text-2xl m-1' htmlFor="status">Status:  </label>  
          <input 
          className='border-2 border-black ml-5'
          placeholder='name'
            type="text"
            id="status"
               value={status}
            onChange={(event) => setStatus(event.target.value)}
            required
          />
        </div>
        <div>
          <button className="bg-sky-400 text-xl m-2 pl-3 pr-3 rounded-md font-semibold hover:bg-sky-300" type="submit">Submit</button>
        </div>
      </form>

    
      <div className='m-2 '>
        <button className='m-3 border-1 border-blue-950 pl-4 pr-4 hover:bg-red-200' onClick={() => setFilter('All')}>All</button>
        <button
        className='m-3 border-1 border-blue-950 pl-4 pr-4 hover:bg-red-200'
        onClick={() => setFilter('Active')}>Active</button>
        <button
        className='m-3 border-1 border-blue-950 pl-4 pr-4 hover:bg-red-200'
        onClick={() => setFilter('Complete')}>Complete</button>
      </div>

    {/* table start */}
     <div>
     <table className='ml-96 p-10 mx-auto'>
        <thead>
          <tr  >
            <th className='p-2  text-2xl'>Problem Name</th>
            
            <th className='p-2 text-2xl'>Status</th>
          </tr>
        </thead>
        <tbody >
          {filteredProblems().map((problem, idx) => (
            <tr key={idx} className='border-1 border-black m-2 p-2'>
              <td >{problem.problemName}</td>
              <td>{problem.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
     </div>
    </div>
    </div>
  );
}

export default ProblemTable;
