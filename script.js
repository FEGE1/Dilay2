let z=0;
function moveButton(){
    z=0
    document.getElementById('yesButton').innerText="Evet";
    var x= Math.random() * (window.innerWidth - document.getElementById('noButton').offsetWidth)-85;
    var y= Math.random() * (window.innerHeight - document.getElementById('noButton').offsetHeight)-48;
    document.getElementById('maingif').style.display= 'none';
    document.getElementById('gifsad').style.display= 'block';
    document.getElementById('noButton').style.position = 'absolute';
    document.getElementById('noButton').style.left = `${x}px`;
    document.getElementById('noButton').style.top = `${y}px`;
    document.getElementById('message').style.display='block';
    document.getElementById('headmessage').style.display='block';
    document.getElementById('gif').style.display='none';
    console.log(`x: ${x} ve y: ${y}`)
}
function nextPage(){
    window.location.href = "yes.html";
}
function yesButton(){
    document.getElementById('message').style.display='none';
    document.getElementById('headmessage').style.display='none';
    document.getElementById('gif').style.display='block';
    document.getElementById('gifsad').style.display= 'none';

    if(z==0){
        document.getElementById('yesButton').innerText="Emin misin?";
        z=z+1;    
    }
    else if(z==1){
        document.getElementById('yesButton').innerText="Son kararın mı?";
        z=z+1; 
    }
    else if(z==2){
        document.getElementById('yesButton').innerText="Bunun geri dönüşü yok?";
        z=z+1;
    }
    else if(z==3){
        document.getElementById('yesButton').innerText="Delil olarak kullanılacak!";
        z=z+1;
    }
    else if(z==4){
        nextPage();
    }
    else{
        console.log("ifler bitti")
    }
    console.log("yesbutton çalıştı");
    console.log(z);
}