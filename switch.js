// if dan swicth hampir sama penggunaannya

/*if(kondisi 1) {
    aksi 1
}   else if{ kondisi 2){
        aksi 2
}   else if{(kondisi 3){
        aksi 2
}...
   else if (kondisi n){
        aksi n
}   else {
        aksi default
} */

/*switch(ekspresi) {
    case "nilai 1":
        aksi 1
    [break;]

    case "nilai 2":
        aksi 2
    [break;]

    case "nilai n":
        aksi n
    [break;]

    default:
        aksi default
    [break]
}
*/

var item = prompt ('masukkan makanan / minuman : \n (cth: nasi, daging, susu, humburger, softdrink ) ');
   //var item bisa diganti apa saja tergantung apa yang menjadi objeknya contohnya "prompt", dsb
// switch (item){
//     case 'nasi':
//         alert('makanan / minuman SEHAT!');
//         break;
//     case 'daging':
//         alert('makanan / minuman SEHAT!');
//         break;
//     case 'susu':
//         alert('makanan / minuman SEHAT!');
//         break;
//     case 'hamburger':
//         alert('makanan / minuman TIDAK SEHAT!');
//         break;
//     case 'softdrink':
//         alert('makanan / minuman TIDAK SEHAT!');
//         break;
//     default :
//         alert('anda memasukkan nama makanan / minuman yang salah!');
//         break;
// }


switch (item){
    case 'nasi':
    case 'daging':
    case 'susu':
        alert('makanan / minuman SEHAT!');
        break;
    case 'hamburger':
    case 'softdrink':
        alert('makanan / minuman TIDAK SEHAT!');
        break;
    default :
        alert('anda memasukkan nama makanan / minuman yang salah!');
        break;
}