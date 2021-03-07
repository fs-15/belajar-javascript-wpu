/* 
LINK YOUTUBE : https://www.youtube.com/watch?v=dld5ZKHYxC0&list=PLFIM0718LjIWXagluzROrA-iBY9eeUt4w&index=28
Membuat dan Menjalankan FUNCTION

*/

//menjumlahkan 2 buah volume kubus (a dan b)

            // var a = 8;
            // var b = 3;
            var volumeA;
            var volumeB;
            var total;

            // volumeA = a * a * a;
            // volumeB = b * b * b;
            // total = volumeA + volumeB;

            // console.log(volumeA);
            // console.log(volumeB);
            // console.log(total);

//////////////////////////////////////

//membuat function
//dan menyimpan
function jumlahDuaKubus(a, b) {
    var total, volumeA, volumeB;
    volumeA = a * a * a;
    volumeB = b * b * b;
    total = volumeA + volumeB;

    return total;
}

// sudah tersimpan di memori
// dan perlu menampilkan function mmenggunakan
   // alert atau console
   // ....dimana memanggil nama function disertai paraameternya
   // ....(8 menjadi a, dan 3 menjadi b)





// menampilkan function
// dengan alert
alert(jumlahDuaKubus(8, 3));
// atau console
console.log(jumlahDuaKubus(8, 3));

// menghitung kubus yang lain?
// bisa

alert(jumlahDuaKubus(15, 20));