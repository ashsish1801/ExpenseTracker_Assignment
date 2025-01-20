Expense Tracker Web Application 

Project Description :
The Expense Tracker is a web application designed to help users manage and track their expenses efficiently. Users can add details such as the amount, category, description, and date of each expense. Entries are displayed in a dynamic table, complete with filtering options based on categories or time ranges. The application also calculates the total expense for the filtered data and allows users to delete individual entries.

Features
1. Add, view, and delete expenses with ease.
2. Dynamic filtering by category and time range (Today, Last 7 days, This month).
3. Automatically calculates and displays the total expense for the displayed entries.
4. Easy to use and User-friendly.

Setup Instructions :

Prerequisites
Node.js installed on your system.
A backend server running with APIs for handling expense data (example provided below).

Steps to Set Up

1. Clone the Repository:
    git clone https://github.com/your-username/expense-tracker.git
    cd expense-tracker

2. Install Dependencies:
    npm install

3. Configure Backend URL: Update the API endpoints in the code (e.g., http://localhost:8000/api) to match your backend server.

4. Start the Application:
    npm start

5. Access the Application: Open your browser and navigate to http://localhost:3000.

API Documentation : 

Base URL
http://localhost:8000/api

Endpoints
1. Add Expense
    Endpoint: /data
    Method: POST
    Request Body:
    {
    "amount": "Number",
    "description": "String",
    "category": "String"
    }
    Response:
    {
    "message": "Entry added successfully",
    "data": { "id": "String", "amount": "Number", "description": "String", "category": "String", "Date": "Date" }
    }

2. Fetch All Expenses
    Endpoint: /fetchAllData
    Method: GET
    Response:
    [
    { "id": "String", "amount": "Number", "description": "String", "category": "String", "Date": "Date" }
    ]

3. Delete Expense
    Endpoint: /deleteEntry/:id
    Method: DELETE
    Response:
    { "message": "Entry deleted successfully" }


Usage Guide
1. Add Expense:
    Enter the amount, description, and select a category.
    Click Add to save the expense.

2. Filter Expenses:
    Use the dropdowns above the table to filter data by category or time range.

3. Delete Expense:
    Click the Delete button in a table row to remove that entry.

4. View Total Expense:
    The total expense for the filtered data is displayed at the bottom of the table.
