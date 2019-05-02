const sortbutton = document.getElementById("sort")
const inputName = document.getElementById("name")


let students = [];
let studentCounter= 1;

const buildStudentObjects = () => {
  let  = {
    name:getinputvalue(),
    house:gethouseselector()
  }
}
 

 const getinputvalue = () => {
  return inputName.value
  
}
const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};
const deleteFunction = (e) => {
  const buttonId = e.target.id;
  let tempArray = [];
  students.forEach((student) => {
    if(student.id !== buttonId){
     tempArray.push(student);
    }
  })
  students = tempArray;
  domStringBuilder(students);
  addDeleteEvents();
};

const addDeleteEvents = () => {
  const deleteButtons = document.getElementsByClassName('deleteButton');
  for(let i=0; i<deleteButtons.length; i++){
      deleteButtons[i].addEventListener('click', deleteFunction);
  }
};

  const gethouseselector = () => {
  let randomNumber =  Math.floor((Math.random()*4)+1);
  let houseType = '';
  if(randomNumber ==1){ houseType = "Griffindoor"};
  if(randomNumber ==2){ houseType = "Hufflepuff"};
  if(randomNumber ==3){ houseType = "Slitherin"};
  if(randomNumber ==4){ houseType = "Ravinclaw"};

  return houseType;
 };

 const domStringBuilder = (arrayToPrint) => {
   let domString = '';
   arrayToPrint.forEach((student) => {
    domString += ` <div class="card col-3">`
    domString += `  <div class="card-body">`;
    domString += `    <h5 class="card-title">${student.item}</h5>`;
    domString += `    <h5 class="card-title">${student.house}</h5>`;
    domString += `    <a  class="btn btn-danger deleteButton" id=${student.id}>Expel</a>`;
    domString += `  </div>`;
    domString += `</div>`;

   });
   addDeleteEvents();
   printToDom('student-container', domString);
  };
   
  const addStudents = (e) => {
      e.preventDefault();
      const inputText = inputName.value;
      const studentHouse = gethouseselector();
      const newStudent = {
          item: inputText, 
          id: `student${studentCounter}`,
          house: studentHouse, 
      };
      students.push(newStudent);
      studentCounter++;
      domStringBuilder(students);
      addDeleteEvents();
      inputName.value = '';
  }
  
 
 const eventListeners = () => {
     sortbutton.addEventListener('click', addStudents);
 };

  const init = () => {
    eventListeners ();
  };

  init();