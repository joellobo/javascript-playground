// Antes

const text = ' Alura Cursos ';
const words = text.trim()
  .toUpperCase()
  .split(' ');

console.log(words); // ['ALURA', 'CURSOS']



// Depois

const trim = text => text.trim();
const toUpperCase = text => text.toUpperCase();
const split = separator => text => text.split(separator);

const words = 
  split(' ')( 
    toUpperCase(
      trim(' Alura Cursos ')
    )
  );

console.log(words);


