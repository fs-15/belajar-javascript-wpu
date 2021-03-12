/*
Link Youtube : 
https://www.youtube.com/watch?v=a3CWDShrh0s&list=PLFIM0718LjIWXagluzROrA-iBY9eeUt4w&index=31
 */




// global scope atau window scope - 
// adalah variablel yang diluar atau diibaratkan diluar mobil(function scope) yang memiliki kaca gelap
// dan function scope (didalam mobil yang memiliki kaca gelap)

var a = 1;  //global scope

function tes(){            // function scope
    var b = 2;
    console.log(b);
}

tes();

// fs bisa memanggil ws ,ws tidak bisa memanggil di dalam fs


