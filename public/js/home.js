const addDetailsInput = document.querySelector('.details-input');
const addAmountInput = document.querySelector('.money-input');
const addCategorySelect = document.querySelector('#category');
const addBillBtn = document.querySelector('.add-bill');
const showCategorySelect = document.querySelector('#category-select');
const userNameLogo = document.querySelector('.user-name');
let showCategoryId;

const signInData = JSON.parse(localStorage.getItem('signInData'));
userNameLogo.textContent = signInData?.userName;

const postJsonData = (endpoint, dataObj) => fetch(endpoint, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(dataObj),
})
  .then((res) => res.json());

const deleteBill = (id) => {};

const loadDataIntoDom = (data) => {
  data.forEach((category) => {
    const oneBillDiv = document.createElement('Div');
    const detailsSpan = document.createElement('span');
    const moneySpan = document.createElement('span');
    const categorySpan = document.createElement('span');
    const deleteBtn = document.createElement('button');

    detailsSpan.textContent = category.details;
    moneySpan.textContent = ` ${category.amount}$ `;
    categorySpan.textContent = addCategorySelect.querySelector(`option[value="${category.category_id}"]`).textContent;
    deleteBtn.textContent = ' Delete';

    categorySpan.setAttribute('value', category.category_id);
    oneBillDiv.setAttribute('class', 'bill');
    detailsSpan.setAttribute('class', 'details');
    moneySpan.setAttribute('class', 'money');
    categorySpan.setAttribute('class', 'category');
    deleteBtn.setAttribute('class', 'del');

    billContent.appendChild(oneBillDiv);
    oneBillDiv.appendChild(detailsSpan);
    oneBillDiv.appendChild(moneySpan);
    oneBillDiv.appendChild(categorySpan);
    oneBillDiv.appendChild(deleteBtn);
  });
};

const getBills = ({ userName, password, showCategoryId: categoryId }) => {
  postJsonData('/get-bills', { userName, password, categoryId })
    .then((data) => {
      console.log(data);
      loadDataIntoDom(data);
    });
};

addBillBtn.addEventListener('click', () => {
  if (signInData) {
    const { userName, password } = signInData;
    const amount = addAmountInput.value.trim();
    const details = addDetailsInput.value.trim();
    const categoryId = addCategorySelect.value.trim();
    showCategoryId = showCategorySelect.value.trim();
    postJsonData('/add-bill', {
      userName, password, amount, details, categoryId,
    })
      .then((data) => {
        console.log(data, showCategoryId);
        getBills({ userName, password, showCategoryId });
      });
  }
});

showCategorySelect.addEventListener('change', () => {
  showCategoryId = showCategorySelect.value.trim();
  const { userName, password } = signInData;
  getBills({ userName, password, showCategoryId });
});
