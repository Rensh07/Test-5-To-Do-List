const textInputField = document.querySelector('.input-section input');
const addButton = document.querySelector('.add-task-button');
const todosListBody = document.querySelector('.todos-list-body');
const deleteEl = document.querySelector('.delete');
const editButton = document.querySelector('.edit');
const completeBtn = document.querySelector('.complete');

addButton.onclick = function () {
  if (textInputField.value.length == 0) {
    alert('Kindly Enter ALL Details!!!!');
  } else {
    todosListBody.innerHTML += `
    <tr class="todo-item">
      <td class="td">${
        document.querySelector('.input-section .i-title').value
      }</td>
      <td>${document.querySelector('.input-section .i-date').value}</td>
      <td>${document.querySelector('.input-section .i-time').value}</td>
      <td class="td">${
        document.querySelector('.input-section .i-desc').value
      }</td>
      <td class="pending">Pending</td>
      <td class=btn-3>
        <button class="edit" onclick="editRow(this)">
          <i class="fa-solid fa-pencil"></i>
        </button>
        <button class="complete" onclick="complete(this)">
          <i class="fa-solid fa-check"></i>
        </button>
        <button class="delete" onclick="deleteRow(this)">
          <i class="far fa-trash-alt"></i>
        </button>
      </td>
    </tr>
    `;
  }
};

//status complete
function complete(btn) {
  document.querySelector('.pending').textContent = 'complete';
}

//delete row
function deleteRow(btn) {
  var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

//edit row
function editRow(button) {
  var row = button.parentNode.parentNode;
  var cells = row.getElementsByTagName('td');

  // Get existing data
  var title = cells[0].innerText;
  var date = cells[1].innerText;
  var time = cells[2].innerText;
  var desc = cells[3].innerText;

  // Replace data with input fields
  cells[0].innerHTML =
    '<input class="e-input" type="text" value="' + title + '">';
  cells[1].innerHTML =
    '<input class="e-input" type="date" value="' + date + '">';
  cells[2].innerHTML =
    '<input class="e-input" type="time" value="' + time + '">';
  cells[3].innerHTML =
    '<input class="e-input" type="text" value="' + desc + '">';
  cells[5].innerHTML =
    '<button class="btn update" onclick="saveRow(this)">Update</button>';
}

function saveRow(button) {
  var row = button.parentNode.parentNode;
  var cells = row.getElementsByTagName('td');

  // Get updated data
  var title = cells[0].querySelector('input').value;
  var date = cells[1].querySelector('input').value;
  var time = cells[2].querySelector('input').value;
  var desc = cells[3].querySelector('input').value;

  // Update row with new data
  cells[0].innerText = title;
  cells[1].innerText = date;
  cells[2].innerText = time;
  cells[3].innerText = desc;

  cells[5].innerHTML = `
  <button class="edit" onclick="editRow(this)">
    <i class="fa-solid fa-pencil"></i>
  </button>
  <button class="complete">
    <i class="fa-solid fa-check"></i>
  </button>
  <button class="delete" onclick="deleteRow(this)">
    <i class="far fa-trash-alt"></i>
  </button>`;
}
