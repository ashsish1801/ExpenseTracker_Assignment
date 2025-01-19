import React, { useEffect, useState } from 'react'
import '../Styles/InputComponent.css'
import axios from 'axios'

const InputComponent = () => {
  
  const[data,setData] = useState(null);
  const[loading,setLoading] = useState(true);
  const[error,setError] = useState('')
  const[amount,setAmount]=useState('');
  const[description,setDescription]=useState('');
  const[category,setCategory]=useState('');
  const[successMessage,setSuccessMessage]=useState('');
  const[userData,setUserData]=useState(null);

  const handleAmount = (event)=>{
    setAmount(event.target.value);
  }

  const handleDescription = (event)=>{
    setDescription(event.target.value);
  }

  const handleCategory =(event)=>{
    setCategory(event.target.value)
  }

  useEffect(()=>{
    handleUserIdFetch();
  },[]);

  const handleAddButton = async ()=>{
      await axios.post('http://localhost:8000/api/data',{
      amount , description , category
    })
    .then((response)=>{
        console.log(response.data);
        setSuccessMessage("Entry Saved Successfully");
        setTimeout(()=>setSuccessMessage(''),3000);
        setData(response.data);
    })
    .catch(error=>{
      console.log("Error in handleAddButton" ,error);
    })
}

const handleUserIdFetch = async ()=>{
    try {
      const response = await axios.get('http://localhost:8000/api/fetchAllData')
      setUserData(response.data);
      setLoading(false);
      console.log(response.data)
    } catch (error) {
      console.log("handleUserIdFetch error ",error);
      setLoading(false);
    }
}

  return (
    <div className='OuterMostDiv'>
        <div className='inputFields'>
            <input className='amount' type="Number" placeholder='Amount' value={amount} onChange={handleAmount}/>
            <input className='amount' type="text" placeholder='Description'value={description} onChange={handleDescription}/>
            <select name="Category" id="Category" value={category} onChange={handleCategory}>
                <option value="" disabled selected>Category</option>
                <option value="Food">Food</option>
                <option value="Rent">Rent</option>
                <option value="Travel">Travel</option>
                <option value="Others">Others</option>
            </select>
        </div>
        <div className='AddButton'>
            <button className='exactButton' onClick={handleAddButton}> Add</button>
        </div>
        <div>
          {successMessage && <p className='successMessage'>{successMessage}</p>}
        </div>
        <div className='tableData'>
          <table className='styledTable'>
            <thead>
              <tr>
                <th>Amount</th>
                <th>Description</th>
                <th>Category</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {userData && userData.map((item)=>(
              <tr key={item._id}>
                <td>{item.amount}</td>
                <td>{item.description}</td>
                <td>{item.category}</td>
                <td>{item.Date}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default InputComponent