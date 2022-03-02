const addDetailsInput = document.querySelector('.details-input');
const addAmountInput = document.querySelector('.money-input');
const addCategorySelect = document.querySelector('#category');
const addBillBtn = document.querySelector('.add-bill');
const showCategorySelect = document.querySelector('#category-select');
const userNameLogo = document.querySelector('.user-name');

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

const loadDataIntoDom = (data) => {};

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
    const showCategoryId = showCategorySelect.value.trim();
    postJsonData('/add-bill', {
      userName, password, amount, details, categoryId,
    })
      .then((data) => {
        console.log(data, showCategoryId);
        getBills({ userName, password, showCategoryId });
      });
  }
});
