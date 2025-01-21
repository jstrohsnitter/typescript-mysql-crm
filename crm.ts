import promptSync = require("prompt-sync");
const prompt = promptSync();
const { Client } = require('pg');

//import promptSync from "prompt-sync";
//======================CONNECT TO DB===========================================

const client = new Client({
    user: 'macbook',
    host: 'localhost',
    database: 'tyscrm',
    password: 'none',
    port: 5432,
})

//========APP=================================================================================================
const app = async () => {
try {
    await client.connect()
    .then(() => console.log('Connected to PostgreSQL!'))
    .catch(err => console.error('Connection error:', err))

let greet: string = prompt("Hello User! What would you like to do?\nAdd an employee? Enter 'Add Employee'.\nAdd Company? Enter 'Add Company'. \nView Employees? Type 'View Employees'\n"
)

//=========================================CREATE======================================================================================================

if (greet === 'Add Employee') {
    
    let newEmployeePrompt: string = prompt("Enter employee name ")
    let newCompany_id: number = Number(prompt("Enter company id (number) "))
    
    const newEmployeeCrm = async () => {
    
        try {    
            const newEmployee = `INSERT INTO crm(employee_name, company_id) VALUES($1, $2)`
            const values = [`${newEmployeePrompt}`, `${newCompany_id}`]
    
            const res = await client.query(newEmployee, values)
            console.log('inserted:', res)
    
    
        } catch (err) {
            console.error('Error:', err);
        } 
    }
    
    await newEmployeeCrm();
}

else if (greet === 'Add Company') {
    
    let newCompanyPrompt: string = prompt("Enter company name ")
    
    const newCompanyCrm = async () => {
    
        try {
            
            const newCompany = `INSERT INTO companies(company) VALUES($1)`
            const values = [`${newCompanyPrompt}`]
    
            const res = await client.query(newCompany, values)
            console.log('inserted:', res)
    
    
        } catch (err) {
            console.error('Error:', err);
        } 
    }
    
    await newCompanyCrm();
}

//===============READ====================================================================

else if (greet === 'View Employees') {

    const viewCrm = async () => {
    
        try {
            
            const viewEmployees = `SELECT * FROM crm`
            //const values = [`${newCompanyPrompt}`]
    
            const res = await client.query(viewEmployees)
            console.log(res.rows)
    
    
        } catch (err) {
            console.error('Error:', err);
        } 
    }
    
    await viewCrm();
}

//====================================================================================================

}catch (err) {
    console.error('Error:', err);
} finally {
    await client.end();
    console.log('Client disconnected.');
}

}

app();




























// const allCompanies = client.query('SELECT * FROM companies', (err, res) => {
//     if (err) {
//       console.error('Error executing query:', err);
//     } else {
//       console.log(res.rows[0]);
//     }
//     client.end();
//   })
  
//   const newEmployee = 'INSERT INTO crm(employee_name, company_id) VALUES($1, $2)'
//   const values = ['ted', '2']

  
//   console.log(res)





// import inquirer from 'inquirer';

// inquirer
//   .prompt([
//     /* Pass your questions in here */

//     "Hello"
//   ])
//   .then((answers) => {
//     // Use user feedback for... whatever!!
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });

