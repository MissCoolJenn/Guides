// ************************************************************************************************************************
// ВСПЛЫВАЮЩИЕ ОКНА
function Alert_Message() {
    //
    alert('текст в окне \n-перенос текста на новую строку');


    //
    var data1 = confirm('yes?')  // появится текст + две кнопки (отмена / ок)
    console.log(data1)   // при нажатии отмена = false \ при ок = true


    //
    var data2 = prompt('укажите число, например число 4');  // будет окно confirm, но с полем ввода данных
    console.log(data2)  // null - по умолчанию, либо то, что ввел пользователь
}


// ************************************************************************************************************************
// ВЫВОД ИНФОРМАЦИИ (на сайт и в консоль)
function Document_Write_Old() {       // старый метод (не удобный)
    //
    document.write('hellow world!');  // - вывод текста на страниу в месте сразу после расположение тега <script> </script>
    
    /*  Получится такая структура html:
    <body>
        <script>
            Name();
        </script>
        hellow world!
    </body>
    */
}

function Console_Messages() {        // - вывод сообщения в консоль
    //
    console.log('hello world!');     //
    console.info('hello world!');    // тоже самое что и log)

    console.log('hello world!' + var_name);  // вовод в одной строке сразу несколько типов данных

    console.error('fuckin error');   // вывод ошибки в консоль (будет отмечена красным фоном (нужно исправить что бы код работал))
    console.warn('fuckin error');    // вывод предупреждения к консоль (отмечена желтым цветом (можно не исправлять и код будет работать))

    console.log(`Мне нравится песня ${song}. Я оценил её на ${(score / highestScore) * 100}%.`);
} 


// ************************************************************************************************************************
// ПЕРЕМЕННЫЕ и ТИПЫ ДАННЫХ
function variables() {
    //
    const const_name = 51;  // константа - переменная, но значение менять нельзя
    var var_name = 'fsdg';      // переменная (работает как в python)
}


// ************************************************************************************************************************
// МАТЕМАТИЧЕССКИЕ ОПЕРАЦИИ
function mat_operations() {
    //
    var first = 1;
    var second = 3;

    console.log('result:' + (second - first));
    //                      ^ мат. операции должны быть отделены от совмещения разных типов данных в одну строку
    
    first += 3;     // работает как в python
    second --;      // отнять 1 

    Math.sin        // Math - библеотека с кучей математичесских алгоритмов
    Math.min(1, 2, 3, 4, 5)        // поиск минимального числа из списка
    //    ^ есть ещё .max()
    Math.random()   // возвращает псевдослучайное число в диапазоне от 0 до 1
    //
    // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math
    //   ^ документация Math

    // округление остатка до целого числа
    Math.floor(9 / 4);  // получится 2

    // повторить элемент n раз
    var q = '@'.repeat(10)  // получится @@@@@@@@@@
}


// ************************************************************************************************************************
// УСЛОВНЫЕ ОПЕРАТОРЫ
function operators() {
    //
    var num = 15;

    // IF{}, ELSE IF{}, ELSE{}
    if(num > 16){
        console.log('how?');
    }
    else if(num == 1 && num == 2) {     // && - оператор И
        console.log('nonono');
    }
    else if(num == 1 || num == 6) {     // || - оператор ИЛИ
        console.log('nonono');
    }
    else {
        console.log('yep');
    }
    
    // SWITCH, CASE
    switch(num) {
        case 4: console.log('var num is 4!');
        break;                                      // break - нужно для обозначение конца case`a

        case false: console.log('var num is false!');
        break;

        default: console.log('default case(');      // default - сработает если никакие другие кейсы не стработали
        // break; - но можно и без него (тогда после выполнение case - код будет продолжать сравнивать условия и default выполнить в любом случае)
    }


    // ХИТРОВЫЕБАНЫЕ УСЛОВИЯ
    var q = (stack < 2 ? 'Stack: ' + stack : 'Stacks: ' + stack);                    
    //       \ условие \     если true     \     если false     \
}


// ************************************************************************************************************************
// ТАЙМЕРЫ и ИНТЕРВАЛЫ
function timer_and_intervals() {
    //
    var count = 0;

    // ИНТЕРВАЛ
    function function_name() {
        count ++;

        if(count > 5) {        // код для остановки интервала
            clearInterval(int_name);
        }
    }
    var int_name = setInterval(function_name(), 1000);   // вызов фунции "function_name()" каждые 1000мс

    // ТАЙМЕР
    setTimeout(function() {     // таймер сработает только один раз после ожидание заданного времени
        console.log('some text')
    }, 2000);
}


// ************************************************************************************************************************
// ВРЕМЯ
function Datetime() {
    //
    var date = new Date(/* '2018-01-02T03:04:05.678Z' - необязательный аргумент времени начала отсчета */);  
    //    ^ Объект Дата содержащий число миллисекунд прошедших с 1 января 1970 г.

    console.log(date.getDate);   // getDate - день месяца (сейчас) по местному времени
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMilliseconds
    //   ^ документация по объекте даты

    console.log('Время сейчас: ' + date.getHours + date.getMinutes);  // выведет "время сейчас: " и часы + минуты

    date.setHours(13);   // установить свое время ( например 13 часов дня )
}


// ************************************************************************************************************************
// МАССИВЫ
function arrays() {
    //
    var arr = [1, 12, '3', false, 6678, 'dasg'];
    
    arr[3] = true;
    console.log(arr[2]);  // '3'

    // длинна массива
    console.log(arr.length);


    // добавление элемента в начало массива
    arr.unshift();

    // добавление элемента в конец
    arr.puhs();

    // удаление первого элемента
    arr.shift();

    // удаление последнего элемента
    arr.pop();

    // удаление элемента на индексу
    arr.splice(1, 1)  // .splice(позиция элемента, сколько нужно удалить элемента начиная с первой цифры)


    // присвоить копию массива
    var arr2 = arr.slice()
    
    // сортировка массива
    console.log(arr.sort());   

    // перевернуть массив
    console.log(arr.reverse());

    // объеденение массива в строку
    console.log(arr.join(', '));   // получится просто строка: "1, 12, '3', false, 6678, 'dasg'"
}


// ************************************************************************************************************************
// ЦИКЛЫ
function cycles() {
    // цикл for
    for(var i = 0; i > 10; i++) {
    //                      ^ что произойдет с переменной после итерации
    //               ^ условие до которого цикл работает
    //   ^ создание переменной цикла
        console.log(i);
        
        // условные операторы
        if(i > 4) {
            continue;   // пропуск итерации
        }
        else if(i > 8) {
            break;      // остановка цикла
        }

        // перебор массива
        var arr = [1, 2, 3, 4, 5, 6];

        for(var i = 0; i < arr.length; i++) {
            if(i / 2 == 0) {
                break;
            }
        }
    }


    // цикл while
    var j = 0;
    while(j < 10) {   // к цикле указывается только условие (переменная и действия с ней указываютсья отдельно)
        j++;
        console.log(j);
    }


    // цикл do while
    var l = 1;
    do {                  // do сначала выполняет код внутри себя...
        console.log(l);
    } while(l > 0);       // ...и только потом проверяет условие
}


// ************************************************************************************************************************
// ФУНКЦИИ
//
function func_names() {
    function first() {
        var q = 11;   // - локальная переменная, доступна только внутри этой функции 

        console.log(arg);
    }
    first('some text');


    function second(arg) {
        return (arg);
    }

    console.log(second('text what will be returned'))
}


// ************************************************************************************************************************
// ООП
function classes() {
    //
    class Person {
        constructor(name, age, lvl) {  // иснструмент для создания объекта
            this.name = name;         // тоже самое что 'self.'
            this.age = age;
            this.lvl = lvl;
        }

        get_name() {  // однако писать 'function' не нужно 
            return this.name;
        }
    }

    var alex = new Person('Alex', 45, 14);  // создание объекта класса + его параметры
    
    // получение данных из объекта класса: 
    console.log('Name: ' + alex.name + '\nAge: ' + alex.age + '\nLVL: ' + alex.lvl);  
    console.log(alex.get_name());


    // ************************************************************************************************************************
    // НАСЛЕДОВАНИЕ 
    class Soldier {
        constructor(rifle_type) {
            this.rifle_type = rifle_type;
        }
        
        retur () {
            console.log(this.age + this.name + this.rifle_type);
        }
    }

    Soldier.__proto__ = Person;
}


// ************************************************************************************************************************
// ВЗАИМОДЕЙСТВИЕ html, css, js 
function events() {

// КОД СРАБАТЫВАЮЩИЙ ПОСЛЕ ПОЛНОЙ ЗАГРУЗКИ СТРАНИЦЫ
    document.addEventListener('DOMContentLoaded', function() { 
        document.body.classList.add('ready');                   // добаляет на стрницу документа класс к которому можно подвязать какой то код
    });


// СМЕНА ТЕКСТА ПРИ НАЖАТИИ НА КНОПКУ
    /* html:
    <p onclick='Func_name_uhh(this)'>   - можно применить почти на всех тэгах, но лучше использовать '<button>'
                                ^ в скрипт js будет передаваться этот объект и потом с ним можно будет взаимодействовать
     // ^  ondoubleclick - сработает при двойном клике
     // ^  onmouseover   - при наведении мыши на объект
     // ^  onmouseout    - после того как мышь сначала навелась а потом покинула область объекта
     // ^  oninput       - срабатывает как только я что то воожу в поле ввода 
     //   ... и другие
        Click me
    </p>
    */

    var count = 0;
    function Func_name_uhh(obj) {    
        //alert('you clicked on me');
        
        count ++;
        obj.innerHTML = 'you clicked me: ' + count + ' times';
            // ^ позволяет взаимодействовать с объектом и менять в нем свойства, например текст, стили 
    }


// ОТОБРАЖЕНИЕ ТЕКСТА КОТОРЫЙ Я ВВОЖУ В ПОЛЕ ВВОДА
    /* html:
    <imput oninput='Func_name_ssss(this)'>   - можно применить почти на всех тэгах, но лучше использовать '<button>'
    */

    function Func_name_ssss(obj) {
        if(obj.value == 'hello') {  // - пример проверки значения которое передается из поля в функцию
            alert('wats up man?)');
        }
        console.log(obj);  // при вводе каждого нового символа в в функцию будет передавться текст из поля ввода
    }

    
// ОБРАЩЕНИЕ К ID ТЕГА html
    /* html:
    <p id='first_p' title='some title text'>Some text</p>
    */

    var first_p = document.getElementById('first_p');
                            // ^ обратиться к элементу по его id
                // ^ позволяет взаимодействовать с всем htnl файлом, с его тегами и т.д.
                
    first_p.log(text.id);  // - вывод в консоль id атрибута
    first_p.title = 'new title text';  // - смена значения атрибута 

    document.getElementById('first_p').style.color = 'red';  
    // короткая версия, но если изменений больше 1 лучше использовать переменную


// ОБРАБОТЧИК СОБЫТИЙ ( addEventListener() )
    document.getElementById("elemet_id").addEventListener('click', function() {function_name()});
    //                          ^ id елемента                        ^ анонимная фунция вызывающая другую функцию
    //         ^ найти элемент по id       ^ добавить обработчик события

    //                                                       ^ тип события:     click   - нажатие на елемент
    //                                                                          keydown - нажатие кнопки на клавиатуре 
    

// ДОБАВЛЕНИЕ КЛАССОВ ОБЪЕКТАМ / ДОКУМЕНТУ
    document.getElementById(q).classList.add('scale-up-center');      // добавить класс объекту 'q'
    document.getElementById(q).classList.remove('scale-up-center');   // удалить класс у объекта 'q'


// ВЗАИМОДЕЙСТВИЕ С ОКНОМ БРАУЗЕРА ПОЛЬЗОВАТЕЛЯ
    // при изменении размеров окна - вызвать функцию
    window.onresize = function_name;

    // получение размеров окна браузера пользователя
    var window_size_Y = window.innerHeight;
    var window_size_X = window.innerWidth;



// КАК ПОМЕНЯТЬ СТИЛИ
    /* html:
    <imput oninput='change(this)'>   - можно применить почти на всех тэгах, но лучше использовать '<button>'
    */
    function change() {
        if(obj.value == 'red') {
            obj.style.background = 'red';  // если в поле ввода будет написано 'red' - фон поменяется на красный
            obj.style.cssText = 'border-radius: 5px; border: 0; ront-size: 20px'
                    // ^ внутри можно прописывать CSS код, через ";" можно указать несколько параметров
        }
    }


// СОЗДАНИЕ МАССИВА ТЭГОВ (по названию тэга)
    /* html:
    <span>Text_1</span>
    <span>Text_2</span>
    <span>Text_3</span>
    */
    var mass = document.getElementsByTagName('span');  // - собирает в переменную (массив) все тэги 'span'

    for(var i = 0; i < mass.length; i++) {  // перебор всех элементов массива с тэгами
        console.log(mass[i].innerHTML);    // вывод содержимого элемента в массив
    }


// СОЗДАНИЕ МАССИВА ТЭГОВ (по классу)
    /* html:
    <span class='class_name'>Text_1</span>
    <span class='class_name'>Text_2</span>
    <span class='class_name'>Text_3</span>
    */
    var mass = document.getElementsByClassName('class_name');  // - собирает в переменную (массив) все тэги c классом 'class_name'

    for(var i = 0; i < mass.length; i++) {  // перебор всех элементов массива с тэгами
        console.log(mass[i].innerHTML);    // вывод содержимого элемента в массив
    }
}


// ************************************************************************************************************************
// ВЗАИМОДЕЙСТВИЕ ВВОДИМЫМИ ДАННЫМИ ИЗ ФОРМЫ
function idk() {
    function version_simple() {
        /* html:
        <form id='main_form' onsubmit='check_form(this)' method='post>
                                ^ после нажатия кнопки submit вызовется эта функция (передасться аргумент - все данные из этой формы)
            <label for='name'>You name:</label>                                 - поле ввода имени
            <imput type='text' name='name' id='name'> <br><br>

            <label for='pass_1'>Password</label>                                - поле ввода пароля
            <input type='password' name='pass' id='pass_1'> <br><br>    

            <label for='pass_2'>Password check</label>                          - подтверждение пароля
            <input type='password' name='pass_check' id='pass_1'> <br><br>

            <input type='submit' name='submit' value='Lets check'>              - кнопка подтверждения

            <div id='error_div' style='color: red'></div>   - пустое поле куда будет выведен текст в случае ошибка
        </form>
        */

        document.getElementById('main_form').addEventListener('submit', check_form());
        //                                     ^ вешает на элемент обработчик события 
        //                                          (при событии 'submit' будет вызвана функция 'check_form()')

        function check_form(el) {
                         // ^ получение всей таблицы как переменной с данными
            var name = el.name.value;      // получить данные из поля 'name'
            var pass_1 = el.pass_1.value;  // получить данные из поля 'pass_1'
            var pass_2 = el.pass_2.value;  // получить данные из поля 'pass_2'

            var error_message = '';  // пустое сообщение ошибки

            if (name == '' || pass_1 == '' || pass_2 == '') {  // если какое то поле пустое:
                error_message = 'field(`s) is cant be empty!';  // указать сообщение ошибки
            }
            else if (name.length <= 1) {                                 // если имя меньше 2 букв:
                error_message = 'name lenght cant be less than 1 char!';  // указать сообщение ошибки
            }
            else if (pass_1 != pass_2) {                      // если пароль_1 не равен пароль_2:
                error_message = 'uncorrect second password!';  // указать сообщение ошибки
            }

            if (error_message != '') {                                          // если есть ошибка:
                document.getElementById('error_div').innerHTML = error_message;  // изменить поле div с пустого на значение переменной ошибки
            
                return false;  // - при значении false данные не будут отправлены и страница не перезагрузится
            }
            else {                                            // если ошибок нет:
                alert('all correct!');                         // вывести сообщение
                return true;  // - при значении true данные будут отправлены в бд и страница перезагрузится
            }
        }
    }
    function version_advanced() {  // версия с чистым html и усложненным js
        /* html:   *полностью без js*
        <form id='main_form method='post>
            <label for='name'>You name:</label>                                 - поле ввода имени
            <imput type='text' name='name' id='name'> <br><br>

            <label for='pass_1'>Password</label>                                - поле ввода пароля
            <input type='password' name='pass' id='pass_1'> <br><br>    

            <label for='pass_2'>Password check</label>                          - подтверждение пароля
            <input type='password' name='pass_check' id='pass_1'> <br><br>

            <input type='submit' name='submit' value='Lets check'>              - кнопка подтверждения

            <div id='error_div' style='color: red'></div>   - пустое поле куда будет выведен текст в случае ошибка
        </form>
        */

        document.getElementById('main_form').addEventListener('submit', check_form);
        //                                     ^ вешает на элемент обработчик события 
        //                                          (при событии 'submit' будет вызвана функция 'check_form()')

        function check_form(event) {
                          // ^ передача параметра события (внутри есть параметры этого события с которыми можно взаимодействовать)
            event.preventDefault();
            /* ^ обращение к событию и через 'preventDefault()' - отключить стандартное поведение страницы 
                (страница при 'return true' сама перезагружаться не будет)
                + нужно вручную указывать что делать после отправки данных, куда перенаправить пользователя
            */

            var el = document.getElementById('main_form');  // найти форму по id, сохранаить её в переменную для быстрого обращения к её полям

            var name = el.name.value;      // получить данные из поля 'name'
            var pass_1 = el.pass_1.value;  // получить данные из поля 'pass_1'
            var pass_2 = el.pass_2.value;  // получить данные из поля 'pass_2'

            var error_message = '';  // пустое сообщение ошибки

            if (name == '' || pass_1 == '' || pass_2 == '') {  // если какое то поле пустое:
                error_message = 'field(`s) is cant be empty!';  // указать сообщение ошибки
            }
            else if (name.length <= 1) {                                 // если имя меньше 2 букв:
                error_message = 'name lenght cant be less than 1 char!';  // указать сообщение ошибки
            }
            else if (pass_1 != pass_2) {                      // если пароль_1 не равен пароль_2:
                error_message = 'uncorrect second password!';  // указать сообщение ошибки
            }

            if (error_message != '') {                                          // если есть ошибка:
                document.getElementById('error_div').innerHTML = error_message;  // изменить поле div с пустого на значение переменной ошибки
            }
            else {                                            // если ошибок нет:
                alert('all correct!');                         // вывести сообщение
                window.location = 'https://my_site_name/home';  // переадресовать пользователя на указанную ссылку
            }
        }
    }
}


// ************************************************************************************************************************
// РЕГУЛЯРНЫЕ ВЫРАЖЕНИЯ (или ещё Метасимволы)

// Coming soon...