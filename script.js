let arr = [
  { name: 'Ivan', country: 'Ukraine' },
  { name: 'Petro', country: 'Ukraine' },
  { name: 'Miguel', country: 'Cuba' }
];

const containsCuba = arr.some(({ country }) => country === 'Cuba');

console.log('Does at least one country key have the value "Cuba"?', containsCuba);
