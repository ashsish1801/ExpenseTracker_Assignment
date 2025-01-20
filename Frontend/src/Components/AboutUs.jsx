import React from 'react'
import '../Styles/AboutUs.css'

const AboutUs = () => {
  return (
    <div className='aboutUsContainer'>
        <h1>About Us</h1>
        
        <p>Welcome to the Expense Tracker, a user-friendly web application designed to make managing your finances simple and efficient. With this tool, you can seamlessly track your expenses by adding details such as the amount, category, description, and date. By clicking the Add button, your expense is saved and displayed in a well-organized table below, along with the date of the transaction. Each row in the table includes all the relevant details and a Delete button, allowing you to remove any entry as needed.</p>
        <p>The Expense Tracker also features advanced filtering options, enabling you to sort and view your expenses based on specific categories or within a selected date range. This functionality helps you gain valuable insights into your spending patterns and track expenses over time. With automatic date tracking, real-time updates, and a responsive design, the application offers a smooth user experience across all devices.</p>
        <p>Whether you want to plan your budget, analyze your spending habits, or simply keep your financial records organized, the Expense Tracker is your perfect companion. Start managing your expenses today and take control of your financial future with ease!</p>
        <p>Made by Ashish Agrawal</p>
    </div>
  )
}

export default AboutUs