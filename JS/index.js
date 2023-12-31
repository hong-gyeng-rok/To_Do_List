const toDoInput = document.getElementById("to-do-input");//input_class
const toDoBtn = document.getElementById("to-do-btn");//btn_class
const listContainer = document.getElementById("listContainer");//ul_class

const listItem = document.getElementsByClassName("to-do-li");//li_class
const del = document.getElementsByClassName("del");//del_calss

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
}

//toDoList 클릭시 체크 활성/비활성을 토글형식으로 구현
listContainer.addEventListener("click", function(event){
  if(event.target.tagName === "LI"){
    event.target.classList.toggle("checked");
  }
}, false);

// Add 버튼 클릭 이벤트
toDoBtn.addEventListener("click", addList);

toDoInput.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    addList();
  }
})

//toDoList에 리스트 추가 or input에 아무 입력이 없을 경우 입력하라는 경고문 발생 함수
function addList() {
  const li = document.createElement("li");
  const inputValue = toDoInput.value;
  const addListText = document.createTextNode(inputValue);
  
  li.appendChild(addListText);
  li.className = "to-do-li";

  li.className = "to-do-li";
// input에 아무것도 입력을 안했을 때 alret창 생성 및 input창에 입력시 새로운 todo 생성
  if (inputValue === '') {
    alert("You must write something!!!!");
  } else {
      listContainer.appendChild(li);
    }
    
    toDoInput.value = "";
    
    const span = document.createElement("SPAN");
    const txt = document.createTextNode("X");
    span.className = "del";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (let i = 0; i < del.length; i++) {
      del[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }


listItem.forEach(item => {
  const text = item.textContent.trim();
  const line = document.createElement('span');
  line.className = 'line';
  line.style.width = `${text.length * 12}px`; // 줄의 길이를 텍스트 길이에 비례하게 설정
  item.appendChild(line);
});