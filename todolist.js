 /*const todolist=[];
    function addtodo(){
        const inputElem=document.querySelector('.js-name-input');
        // const name=inputElem.value;
      
        todolist.push(name);
        console.log(todolist);
//reset property
        inputElem.value = '';
    }
 */
 /*const todolist=['make dinner', 'chicken banao', 'chapati'];
 for(let i=1;i<=todolist.length-1;i++){
    todolist[i];
    console.log(i);
        const value=todolist[i];
        console.log(value);
 }*/

 /** second version of todo list**/
  
/*loop through the array
 create some Html code for each todo
 put the html on web page*/

// const todolist=['make dinner','lunch'];

 //how do we group the name and due date together?
 
 const todolist=[{
    name:'make dinner',
    duedate: '15-04-2024'
 },{
    name:'wash dishes',
    duedate:'14-04-2024'
 }];

renderTodoList();

function renderTodoList(){
    let todoishtmml=''; //empty string

    todolist.forEach(function(todoObject,index){
      const {name,duedate}=todoObject;
      const html=`
     
     <div>${name}</div>
     <div>${duedate}</div>
  
      <button class="delt" onclick="todolist.splice(${index}, 1);
      renderTodoList();
      ">Delete</button>
      
      `; //add delete button
      
       //add the new string into the existance array
      todoishtmml+=html;
    })
   // }

   //  for(let i=0;i<todolist.length;i++){
   //    const todoObject=todolist[i];
   //  const todoObject=todoObject.name;
   //  const duedate=todoObject.duedate;
   //shorcurt of this line is destructors
   /* const {name,duedate}=todoObject;
    const html=`
   
   <div>${name}</div>
   <div>${duedate}</div>

    <button class="delt" onclick="todolist.splice(${i}, 1);
    renderTodoList();
    ">Delete</button>
    
    `; //add delete button
    
     //add the new string into the existance array
    todoishtmml+=html;
    }*/ //used in foreach loop
   //  console.log(todoishtmml);

document.querySelector('.js-todo-list').innerHTML=todoishtmml; //print the div
 }
 //func to push the value
 function addtodo(){
    const inputElem=document.querySelector('.js-name-input');
    const name=inputElem.value;
  
    const dateinputelem=document.querySelector('.js-due-date-input');
    const duedate=dateinputelem.value;
  
    todolist.push({
      // name: name,
      // duedate: duedate,
      //shorthand property
      name,
      duedate
   });
   //  console.log(todolist);

    inputElem.value = '';
    renderTodoList(); //update the html, for display in webpage
}

