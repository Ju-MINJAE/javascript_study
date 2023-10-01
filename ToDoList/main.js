const items = document.querySelector('.items');
const input = document.querySelector('.footer_input');
const addBtn = document.querySelector('.footer_button');
const form = document.querySelector('.new-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  onAddBtn();
});

function onAddBtn() {
  const text = input.value;
  if (text === '') {
    input.focus();
    return;
  }
  const item = creatItem(text);
  items.appendChild(item);
  item.scrollIntoView({ block: 'center' });
  input.value = null;
  input.focus();
}
function creatItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item_row');

  const item = document.createElement('div');
  item.setAttribute('class', 'item');

  const name = document.createElement('span');
  name.setAttribute('class', 'item_name');
  name.innerText = text;

  const checkbox = document.createElement('input');
  checkbox.setAttribute('class', 'item_checkbox');
  checkbox.setAttribute('type', 'checkbox');

  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class', 'item_delete');
  deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
  deleteBtn.addEventListener('click', () => {
    alert('삭제완료!');
    items.removeChild(itemRow);
  });

  const itemDivider = document.createElement('div');
  itemDivider.setAttribute('class', 'item_divider');

  item.appendChild(checkbox);
  item.appendChild(name);
  item.appendChild(deleteBtn);
  itemRow.appendChild(item);
  itemRow.appendChild(itemDivider);

  return itemRow;
}

/*
addBtn.addEventListener('click', () => {
  const text = input.value;
  onAddBtn(text);
});

input.addEventListener('keydown', (event) => {
  if (event.isCompoisng) {
    return;
  }
  if (event.keyCode === 13) {
    onAddBtn();
  }
});
*/
