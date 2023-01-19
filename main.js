var loadFile = function(event) {
	var image = document.createElement('img');
    image.className = 'output'
    document.body.appendChild(image)
	  image.src = URL.createObjectURL(event.target.files[0]);

    var text = document.createElement('input')
    text.type = 'text'
    text.addEventListener('input', function(e) {
      text.innerHTML = e.target.value
    })
    addItem = document.querySelector('.add-item'),

    image.onmousedown = function(event) { // (1) отследить нажатие
        // (2) подготовить к перемещению:
        // разместить поверх остального содержимого и в абсолютных координатах
        image.style.position = 'absolute';
        image.style.zIndex = 1000;
        // переместим в body, чтобы мяч был точно не внутри position:relative
        document.body.append(image);
        // и установим абсолютно спозиционированный мяч под курсор

        moveAt(event.pageX, event.pageY);

        // передвинуть мяч под координаты курсора
        // и сдвинуть на половину ширины/высоты для центрирования
        function moveAt(pageX, pageY) {
          image.style.left = pageX - image.offsetWidth / 2 + 'px';
          image.style.top = pageY - image.offsetHeight / 2 + 'px';
        }
      
        function onMouseMove(event) {
          moveAt(event.pageX, event.pageY);
        }

        // (3) перемещать по экрану
        document.addEventListener('mousemove', onMouseMove);

        // (4) положить мяч, удалить более ненужные обработчики событий
        image.onmouseup = function() {
          document.removeEventListener('mousemove', onMouseMove);
          image.onmouseup = null;
        };
    };

    image.ondragstart = function() {
        return false;
    };

    text.onmousedown = function(event) { // (1) отследить нажатие
        // (2) подготовить к перемещению:
        // разместить поверх остального содержимого и в абсолютных координатах
        text.style.position = 'absolute';
        text.style.zIndex = 1000;
        // переместим в body, чтобы мяч был точно не внутри position:relative
        document.body.append(text);
        // и установим абсолютно спозиционированный мяч под курсор

        moveAt(event.pageX, event.pageY);

        // передвинуть мяч под координаты курсора
        // и сдвинуть на половину ширины/высоты для центрирования
        function moveAt(pageX, pageY) {
          text.style.left = pageX - text.offsetWidth / 2 + 'px';
          text.style.top = pageY - text.offsetHeight / 2 + 'px';
        }

        function onMouseMove(event) {
          moveAt(event.pageX, event.pageY);
        }

        // (3) перемещать по экрану
        document.addEventListener('mousemove', onMouseMove);

        // (4) положить мяч, удалить более ненужные обработчики событий
        text.onmouseup = function() {
          document.removeEventListener('mousemove', onMouseMove);
          text.onmouseup = null;
        };
    };

    text.ondragstart = function() {
        return false;
    };
};

addItem.addEventListener('input', function(event) {
  newItem = event.target.value;
})

addBtn.addEventListener('click', function(e) {
  
})