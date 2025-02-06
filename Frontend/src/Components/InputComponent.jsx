import React, { useEffect, useState } from 'react'
import '../Styles/InputComponent.css'
import axios from 'axios'

const InputComponent = () => {
  
  const[practice,setPractice]=useState();
  const[data,setData] = useState(null);
  const[loading,setLoading] = useState(true);
  const[error,setError] = useState('')
  const[amount,setAmount]=useState('');
  const[description,setDescription]=useState('');
  const[category,setCategory]=useState('');
  const[successMessage,setSuccessMessage]=useState('');
  const[userData,setUserData]=useState(null);

  const[selectedCategory,setSelectedCategory] = useState('');
  const[selectedTimeRange,setSelectedTimeRange] = useState('');

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
      await axios.post('https://expensetracker-web-page.onrender.com/api/data',{
      amount , description , category
    })
    .then((response)=>{
        // console.log(response.data);
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
      const response = await axios.get('https://expensetracker-web-page.onrender.com/api/fetchAllData')
      setUserData(response.data);
      setLoading(false);
      console.log(response.data)
    } catch (error) {
      console.log("handleUserIdFetch error ",error);
      setLoading(false);
    }
}

const handleDeleteButton = async(id)=>{

    try {
      const response = await axios.delete(`https://expensetracker-web-page.onrender.com/api/deleteEntry/${id}`);
      console.log("handleDeleteButton response ",response.data.message);

      setUserData((prevData) => prevData.filter((entry)=> entry._id !== id));
      setSuccessMessage('Entry Delete Successfully');
      setTimeout(()=>setSuccessMessage(''),3000);
    } catch (error) {
      console.log('Error in handleDeleteButton' , error);
      setError('Failed to delete entry');
      setTimeout(()=>setError(''),3000);
    }
}

const filteredData = userData?.filter((item)=>{
  const matchCategory = selectedCategory ? item.category === selectedCategory : true;

  let matchTimeRange = true;
  if(selectedTimeRange){
    const entryDate= new Date(item.Date);
    const today = new Date();

    if(selectedTimeRange === 'Today'){
      matchTimeRange = entryDate.toDateString() === today.toDateString();
    }
    else if(selectedTimeRange === 'Last 7 days'){
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(today.getDate()-7);
      matchTimeRange = entryDate >= sevenDaysAgo;
    }
    else if(selectedTimeRange === 'This month'){
      matchTimeRange = entryDate.getMonth()===today.getMonth() && entryDate.getFullYear() === today.getFullYear();
    }
  }
  return matchCategory && matchTimeRange;
})

const totalExpense = filteredData?.reduce(
  (total, item) => total + parseFloat(item.amount || 0),
  0
);

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

        <div className="sortOptions">
          <select id='categoryFilter' onChange={(e)=> setSelectedCategory(e.target.value)} value={selectedCategory}>
            <option value="">Select Category</option>
            <option value="Food">Food</option>
            <option value="Rent">Rent</option>
            <option value="Travel">Travel</option>
            <option value="Others">Others</option>
          </select>

          <select id='timeRangeFilter' onChange={(e)=> setSelectedTimeRange(e.target.value)} value={selectedTimeRange}>
            <option value="">Select Time Range</option>
            <option value="Today">Today</option>
            <option value="Last 7 days">Last 7 days</option>
            <option value="This month">This month</option>
          </select>
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
              {filteredData && filteredData.map((item)=>(
              <tr key={item._id}>
                <td>{item.amount}</td>
                <td>{item.description}</td>
                <td>{item.category}</td>
                <td className='dateAndDelete'>{item.Date} <button className='deleteButton' onClick={()=>{handleDeleteButton(item._id)}}>Delete</button> </td>
              </tr>
            ))}
            </tbody>
            <tfoot>
            <tr>
              <td>Total Expense : {totalExpense || 0}</td>  
              <td></td>  
              <td></td>  
              <td></td>  
            </tr>
          </tfoot>
          </table>
        </div>
    </div>
  )
}

export default InputComponent
