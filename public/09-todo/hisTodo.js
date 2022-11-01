// const selectables = new selectables({
//   elements: "input",
//   zone: ".todo-list",
//   key: "altKey", // altKey,ctrlKey,metaKey,false
//   selectedClass: "active",
// });
const $todoList = [...document.getElementsByClassName("todo")];

document.addEventListener("mouseup", (e) => {
  console.log(e);
  console.log(window.getSelection());
  //   $todoList.forEach((todo) => {
  //     todo.addEventListener("mouseup", (event) => {
  //       switchCheck();
  //     });
  //   });
  document.addEventListener("mouseup", (e) => {
    setTimeout(switchCheck($todoList), 100);
  });
});
function switchCheck(list) {
  list.forEach((todo) => {
    console.log(todo);
    if (todo.classList[3] === "ui-selected") {
      todo.firstElementChild.checked = !todo.firstElementChild.checked;
    }
  });
}
