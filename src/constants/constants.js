const notFound = 'Ничего не найдено';
const startSearch = 'Воспользуйтесь поиском';

function countGridElement() {
  let count = 1;
  if (window.innerWidth < 636) {
    count = 1;
  } else if (window.innerWidth < 1280) {
    count = 2;
  } else if (window.innerWidth < 1668) {
    count = 3;
  } else if (window.innerWidth < 2056) {
    count = 4;
  } else if (window.innerWidth < 2444) {
    count = 5;
  } else {
    count = 6;
  }
  return count;
}
const count = countGridElement();
window.addEventListener('resize', countGridElement);
const rowCount = count * 4 === 4 ? 5 : count * 4;


export { count, rowCount, notFound, startSearch };