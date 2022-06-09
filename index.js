// Write your solution in this file!

let employee = {
    name: 'Allan',
    streetAddress: '76'
}


function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObj = {...employee };
    newObj[key] = value;
    return newObj
}

updateEmployeeWithKeyAndValue(employee, 'Sam', '11 Broadway')

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {

    employee[key] = value;
    return employee
}

destructivelyUpdateEmployeeWithKeyAndValue(employee, 'Sam', '11 Broadway')


function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee }
    delete newEmployee[key]
    return newEmployee
}

deleteFromEmployeeByKey(employee, 'name')

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}

destructivelyDeleteFromEmployeeByKey(employee, 'name')