'use strict';

// USER COMMUNICATION;

/* ALERT */
const A = 'Hallo!';
// alert( A ); // Hallo;

/* CONFIRM */
//const result = confirm( 'are you here?' );
//console.log( result ); // если ok то 'true' если отмена то 'false';

/* PROMPT */
//const answer = prompt( 'bist du 18 Jahre alt?', '' );
// Все данные от пользователя получаются в виде строк вне зависимости от того ввел пользователь число или строку.
// Но если поставить перед запросом на ввод данных от пользователя знак плюс "+" то мы получим числовое значение при
// вводе пользователем числа..

//const answer_2 = +prompt( 'bist du 18 Jahre alt?', '18' );
//console.log( typeof( answer_2 ) );


const answers = [];

answers[ 0 ] = prompt( 'Wie heißen Sie? ', '' );
answers[ 1 ] = prompt( 'Ihre Nachname? ', '' );
answers[ 2 ] = prompt( 'Wie alt sind Sie? ', '' );

document.write( answers );