/*Refactoring

-Readabillity; kemudahan dalam membaca program

-DRY (Don't Repeat Yourself); dalam duplikasi kode

-Testability; penuliasan kode agar mudah dalam pengujian

-Performance; menuliskan kode yang meningkatan performa

-Maintainability; memudahkan pengelolaan dan penggunaan


atau singkatnya memperpendek source code tanpa mengurangi proses dan hasilnya
*/

///////////////////
// <!--contoh Refactoring sederhana-->

// function jumlahDuaKubus(a, b) {
//     var total, volumeA, volumeB;
//     volumeA = a * a * a;
//     volumeB = b * b * b;
//     total = volumeA + volumeB;

//     return total;
// }

// alert(jumlahDuaKubus(8,3));

// hasilnya

function jumlahDuaKubus(a, b) {
    total= a * a * a +  b * b * b;

    return total;
}
alert(jumlahDuaKubus(8,3));