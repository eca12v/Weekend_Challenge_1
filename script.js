
var empArray = [];
var salaryTotal = 0;


var addEmployee = function() {

  var nameFirst = document.getElementById('firstNameIn').value;
  var nameLast = document.getElementById('lastNameIn').value;
  var empId = document.getElementById('empIdIn').value;
  var jobTitle = document.getElementById('jobTitleIn').value;
  var salary = document.getElementById('salaryIn').value;

  var empInfo = {first:nameFirst, last:nameLast, id:empId, title:jobTitle, salary:(salary)};
  console.log(empInfo);

  document.getElementById('empEntered').innerHTML = '<br>First: ' + nameFirst + '<br>' + 'Last: ' + nameLast + '<br>' +  'ID: ' + empId + '<br>' + 'Job Title: ' + jobTitle + '<br>' + 'Yearly Salary: ' + salary;

  empArray.push(empInfo);
  console.log(empArray);

  salaryTotal += Number(salary)/12;
  document.getElementById('salaryMonthly').innerHTML = "$" + salaryTotal;

  //document.getElementById('salaryMonthly').innerHTML= Number(document.getElementById('salaryMonthly').innerHTML) + empInfo.salary/12;
  document.getElementById("empForm").reset();

};


var delEmployee = function(){
  var delEmpId = document.getElementById('delEmpIn').value;
  for (var i = 0; i < empArray.length; i++) {
    if(delEmpId == empArray[i].id){
       document.getElementById('salaryMonthly').innerHTML = "$" + (salaryTotal - (empArray[i].salary/12));
      //document.getElementById('salaryMonthly').innerHTML = Number(document.getElementById('salaryMonthly').innerHTML) - (empArray[i].salary/12);
      empArray.splice(i, 1);
      console.log(empArray);
      document.getElementById('delForm').reset();
      return;
    }
    else{}
  }
  alert("Did not find employee ID.");
};
