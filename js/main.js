'use script';

{
  let baseYear = 2023;
  let date = new Date();
  let thisYear = date.getFullYear();
  let thisYearArea = document.querySelector('.thisYear');
  let hyphen = document.querySelector('.hyphen');

  if (baseYear === thisYear) {
    hyphen.innerHTML = '';
  } else {
    thisYearArea.innerHTML = thisYear;
  }
}