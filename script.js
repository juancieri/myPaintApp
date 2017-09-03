(function(){
    'use strict';
    
    var canvas = document.getElementById('canvas');
    
    var dibujar = function(e) {
        var punto = document.createElement('div');
        punto.classList.add('punto');
        punto.style.left = (e.offsetX - 10) + 'px';
        punto.style.top = (e.offsetY - 10) + 'px';
        punto.style.background = 'black';
        canvas.appendChild(punto);
        
        var botonPuntoColor = document.querySelector('.color-li');
        var cambiarPuntoColor = function(){
            punto.style.background = 'red';
        };
        botonPuntoColor.addEventListener('click', cambiarPuntoColor);
        
    };
    
    canvas.addEventListener('mousedown', function(){
        canvas.addEventListener('mousemove', dibujar);
        canvas.addEventListener('mouseup', function(){
            canvas.removeEventListener('mousemove', dibujar);
        });
    });
    
    var botonCanvasSize = document.getElementById('botonCanvasSize');
    
    var cambiarCanvasSize = function(){
        var canvasAncho = document.getElementById('canvasAncho').value;
        var canvasAlto = document.getElementById('canvasAlto').value;
        canvas.style.width = (canvasAncho) + 'px';
        canvas.style.height = (canvasAlto) + 'px';
    };
    
    botonCanvasSize.addEventListener('click', cambiarCanvasSize);
    
    var saveCanvasName = document.getElementById('saveCanvasName');
    
    var canvasName = document.getElementById('canvas-name');
    
    var editCanvasName = function(){
        var newCanvasName = document.getElementById('newCanvasName').value;
        canvasName.children[0].innerHTML = newCanvasName + '<a href="#" id="editNameCanvas">Editar</a>';
        document.getElementById('form-name').style.display = "none";
        canvasName.children[0].style.display = "block";
    };
    
    saveCanvasName.addEventListener('click', editCanvasName);
    
    var editNameCanvas = document.getElementById('editNameCanvas');
    
    editNameCanvas.addEventListener('click', function(e){
        (e).preventDefault;
        canvasName.children[0].style.display = "none";
        document.getElementById('form-name').style.display = "block";
    });
    
})();