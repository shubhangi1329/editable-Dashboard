const add12=document.querySelector("button");


const tableData=[];
const tableBody=document.querySelector('tbody');


var id=1;
function createTableRow(){
   
 let tr=document.createElement("tr");
 const idtd=document.createElement("td");
 idtd.textContent=id;
 let sname=document.createElement("td");
 let input2=document.createElement("input")
   input2.type='text'
   input2.placeholder="type Name";
   input2.required='true'
   input2.classList.add('inp')
 
 let sroll=document.createElement("td");
 let input3=document.createElement("input")
   input3.type='text'
   input3.placeholder="type rollNumber";
   input3.required='true'
   input3.classList.add('inp')  


   let subj=document.createElement("td");
 let input4=document.createElement("input")
   input4.type='text'
   input4.placeholder="type subject";
   input4.required='true'
   input4.classList.add('inp') 

   let marks=document.createElement("td");
 let input5=document.createElement("input")
   input5.type='number'
   input5.placeholder="type marks";
   input5.required='true'
   input5.classList.add('inp') 

   let markby=document.createElement("td");
 let input6=document.createElement("input")
   input6.type='text'
   input6.placeholder="type marked by";
   input6.required='true'
   input6.classList.add('inp') 

   let td7=document.createElement('td');

   let btn2=document.createElement("button")
   btn2.style.backgroundColor='black'
   btn2.style.color='white'
   btn2.style.padding='5px'
   btn2.innerText="save";

   tr.appendChild(idtd);
    tr.appendChild(sname);
    tr.appendChild(sroll);
   tr.appendChild(subj);
    tr.appendChild(marks);
    tr.appendChild(markby);
    tr.appendChild(td7);

    sname.appendChild(input2);
    sroll.appendChild(input3);
    subj.appendChild(input4);
    marks.appendChild(input5);
    markby.appendChild(input6);
    td7.appendChild(btn2);

    tableBody.appendChild(tr);
  

    id++;
    function saveData(){
      
    if(input2.value=="" || input3.value=="" || input4.value=="" || input5.value==""|| input6.value==""){
      alert("Please fill  all fields saving.")
  }else if (input6.value.includes("@") == false) {
      alert("Please Enter valid Email")
  }else{
      input2.readOnly='true' 
  input3.readOnly='true'
  input4.readOnly='true'
  input5.readOnly='true'
  input6.readOnly='true'
 
  let obj= {id: idtd.innerText, student_name: input2.value, student_roll: input3.value, subject: input4.value, marks: input5.value, markedBy: input6.value};

  tableData.push(obj);
  console.log("new row :",obj);

  console.log("tableData array :",tableData);
  
  td7.innerHTML=" "
  

  }
  
  
}

btn2.addEventListener('click',saveData );
    }











add12.addEventListener("click",createTableRow);