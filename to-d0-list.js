/*const todoList = [];
renderTodoList();

function renderTodoList(){
let todoHTML='';
for(let i=0;i<todoList.length;i++){
  const todo = todoList[i];
  const html = `<p> ${todo} </p> `;
todoHTML += html;
}
console.log(todoHTML)
const divElement =document.querySelector('.js-todo-list')
divElement.innerHTML = todoHTML;
}


function addTodo(){
  const inputElement = document.querySelector('.js-todo-name');
  const name = inputElement.value;
  todoList.push(name);
  console.log(todoList)
  renderTodoList();
}*/

/*const myArray=['good','morning','dhaka','bangladesh'];

myArray[2]=66;
console.log(myArray);
console.log(getLastValue());

function getLastValue(){
  const lastIndex = myArray.length-1; 
  for(let i=lastIndex; i>=0;i--){
    const lastValue= myArray[i];
    return lastValue;
  }
}
*/
//create a new array where each number is increased.

/*const myArray = [2,4,7,6];
console.log(myArray);
const myNewArray =[];
function newArray(){
  for(let i =0; i<myArray.length;i++){
    const result = myArray[i];
    myNewArray.push(result+1)
  }
  return  myNewArray;
}
const resultArray = newArray();
console.log(resultArray);*/

//swap array index fast and last.

/*function arraySwap(array){

  const lastIndex = array.length - 1;

  const lastValue=array[lastIndex];
  const fastValue = array[0];
  

  array[0]=lastValue;
  array[lastIndex]=fastValue;

  return array;
}

console.log(arraySwap([7, 3 , 4, 5, 6]));*/
/*//Count up by 2
  for(let i=0; i<10; i+=2){
console.log(i)
  }*/
//counts down form 5 to 0
/*for( let i = 5; i>=0; i--){
  console.log(i)
}
*/
/*let count=5;
while(count>=0){
  console.log(count)
  count--
}*/
const myaArray1=[1,2,3,4,5];
const myArray2 = myaArray1.slice();
myArray2.push(9);
console.log(myArray2);
console.log(myaArray1);

