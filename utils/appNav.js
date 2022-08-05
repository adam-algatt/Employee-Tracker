const express = require('express');
const db = require('./db/connection');
const inquirer = require('inquirer');
const cTable = require('console.table');
const Choices = require('inquirer/lib/objects/choices');

// landing section with all CMS choices
const landing = () => {
    inquirer
    .prompt(
        [{
type: 'list',
name: 'landingQuery',
message: 'Please select an option below.',
choices: 
[
'View all departments',
'View roles',
'View employees', 
'Add an employee',
'Change employee role',
'Add a role',
'Exit'
]
}]
)
.then(res => {
    switch (res.landingQuery) {
case 'View all departments':
showDepartments(); 
break;
case 'View roles':
showRoles(); 
break;
case 'View employees':
showEmployees(); 
break;
case 'Add an employee':
addEmployee(); 
break;
case 'Change employee role':
changeRole(); 
break;
case 'Add a role':
addRole(); 
break;
case 'Exit':
kill(); 
break; 
    }
})
}
















modules.exports = landing; 