var Employee = [
    {"id":1,"name":"emp1","age":23,"doj":"10-9-2016","experience":2,"salary":40000,"project":"dev"},
    {"id":2,"name":"emp2","age":21,"doj":"10-9-2016","experience":3,"salary":30000,"project":"qa"},
    {"id":3,"name":"emp3","age":24,"doj":"10-9-2016","experience":1,"salary":50000,"project":"dev"},
    {"id":4,"name":"emp4","age":25,"doj":"10-9-2016","experience":2,"salary":60000,"project":"dev"},
    {"id":5,"name":"emp2","age":21,"doj":"10-9-2016","experience":4,"salary":30000,"project":"qa"}
];

var total =0;
function totalSalary(){
    for(var i=0;i<Employee.length;i++)
{   
         total = total + Employee[i].salary;
        
        
}

return total;
}

var TotalSalary = totalSalary();
console.log("Total of the salaries of employees in the company"+TotalSalary);


var newempprjct = [];
//"id" to "employeeId" and remove their salaries, without using map

for(var i=0;i<Employee.length;i++)
{
    Employee[i].employeeId = Employee[i]['id'];
    delete Employee[i].id;
    delete Employee[i].salary;
}
console.log(Employee);

//filter employees based on the project dynamically with normal
function wproject(prjct){
    for(var i=0;i<Employee.length;i++)
{

    if(Employee[i].project === prjct){
        newempprjct[i] = Employee[i];
        
    }else{
        continue;
    }
}
return newempprjct;
}

var projectEmployee = wproject('dev');
console.log(projectEmployee);




