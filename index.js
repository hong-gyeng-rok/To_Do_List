const toDoInput = document.getElementById("to-do-input");
const toDoBtn = document.getElementById("to-do-btn");
const listContainer = document.getElementById("listContainer");

const listItem = document.getElementsByTagName("LI");
const del = document.getElementsByClassName("del");

//"X" 텍스트가 담긴 Span 생성
for(let i = 0; i < listItem.length; i++){
  const span = document.createElement("SPAN");
  const txt = document.createTextNode("X");
  span.className = "del";
  span.appendChild(txt);
  listItem[i].appendChild(span);
}

// X(Span) 클릭시 toDoList 없어짐
for(let i = 0; i < del.length; i++){
  del[i].onclick = function(){
    const target = this.parentElement;
    target.style.display = "none";
  }

//toDoList 클릭시 체크 활성/비활성을 토글형식으로 구현
listContainer.addEventListener("click", function(event){
  if(event.target.tegName === "LI"){
    event.target.classList.toggle =("checkde");
  }
}, false);

// Add 버튼 클릭 이벤트
toDoBtn.addEventListener("click", addList);

//toDoList에 리스트 추가 or input에 아무 입력이 없을 경우 입력하라는 경고문 발생 함수
function addList(){
  const li = document.createElement("li");
  const inputValue = toDoInput.value;
  const addListText = document.createTextNode(inputValue);

  li.appendChild(addListText);
  if( inputValue !== ""){
    listContainer.appendChild(li);
    toDoInput.value = "";
  }else{
    alert("You must write something!!!!");
  }

  //toDoList에 X(SpanTag)추가 
  const span = document.createElement("SPAN");
  const txt = document.createTextNode("X");
  span.className = "del";
  span.appendChild(txt);
  li.appendChild(span)

//X 클릭시 toDoList 지워짐
  for(let i = 0; i < del.length; i++){
    del[i].onclick = function(){
      const target = this.parentElement;
      target.style.display = "none";
      }
    }
  }
}

