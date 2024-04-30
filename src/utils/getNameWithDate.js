const FORMAT = 'A4';
const LANGUAGE = 'EN';

function getNameWithDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const currentDay = `${year}${month}${day}`;

  return `${currentDay}_Mirzaianov_${FORMAT}${LANGUAGE}.pdf`;
}

export default getNameWithDate;
