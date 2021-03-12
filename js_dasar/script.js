
//Popup
  //1. alert - 
  //2. prompt - memasukkan input dari user
  //3. confirm - untuk meminta konfirmasi (bolean/ true atau false)

  // alert('hello wordl!');

  // prompt("hello wordl! fanni");

      // var nama = prompt('Masukkan nama');
      // alert(nama);

  // confirm("kamu yakin?");


//////////////////////////////////////////
// var x=10;
// console.log("hello World");
// console.log('isi dari variable x adalah ' + x);






alert('Selamat datang..');
var lagi = true;

while( lagi === true ){
    var nama = prompt('masukkan nama:');
    alert(`Hallo ${nama}`);
    
    lagi = confirm('coba lagi');
}

alert('Terima Kasih');
