/* 

Link Youtube : https://www.youtube.com/watch?v=uRy81uWrkOQ&list=PLFIM0718LjIWXagluzROrA-iBY9eeUt4w&index=25
- PENGULANGAN & PENGKONDISIAN BERSARANG pada JAVASCRIPT -

// mencetak bintang dengan menambah jumlah bintang
*/

// var s = ''; // tetap diatas 'sebagai variable'
// console.log(s);





//..........................
// s += '*';
// for ( var j = 0; j < 5; j++ ) { //mencetak 5 bintang kesamping
//             s += '*';
// }
// console.log(s);




    
// mencetak pengulangan dengan pengulangan didalamnya
// var s = '';
// for( var i = 0; i < 3; i++) {
//     // s += '*';
//     for ( var j = 0; j < 5; j++ ) { //jumlah bintang dalam baris
//         s += '*';
//     }
//     s += '\n' ; // enter // nomor baris
// }
// console.log(s);





//jumlah bintang berbeda tiap barisnya //contoh sampai 5 baris
// var s = '';
// for( var i = 0; i < 5; i++) {
//     // s += '*';
//     for ( var j = 0; j <= i; j++ ) {
//         s += '*';
//     }
//     s += '\n' ;
// }
// console.log(s);


// pengulangan mundur
var s = '';
for( var i = 10; i > 0; i--) {
    for( var j = 0; j < i; j++ ) {
        s += '*';
    }
    s += '\n';
}
console.log(s);
