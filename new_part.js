console.log('1');
setTimeout(function(){
    console.log('2');
}, 2000);
console.log('3');

function intervalStart(){

};




 window.onload = function(){
    document.getElementById('btn').onclick = function(){
        var count = 5;
        document.getElementById('btn').innerText=(
            'done! you will be redirected to google in'+ count +'seconds'); 
        var set =setInterval(function(){
            count--;
            document.getElementById('btn').innerText=(
                'done! you will be redirected to google in'+ count +'seconds');  
        },1000);
        if(count < 0){
            clearInterval(set);
        };



        setTimeout(function(){
            window.location.href='www.google.com.au';
        },5000);
    };
};
    // document.getElementById('btn').onclick = function(){
    //     document.getElementById('btn').innerText=('666');
    //     setTimeout(function(){
    //         window.location.href='www.google.com.au';
    //     },3000);
    // };