window.onload = choosePic;

        var myPix = new Array("/puzzle/title-1.png","/puzzle/title-2.png","/puzzle/titulo-3.png","/puzzle/title-4.png","/puzzle/title-5.png",);
        
        function choosePic() {
             var randomNum = Math.floor(Math.random() * myPix.length);
             document.getElementById("titleRandom").src = myPix[randomNum];}