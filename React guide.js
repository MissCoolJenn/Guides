// *****************************************************************************************
// ПОДГОТОВКА ПРОЕКТА К НАЧАЛУ РАБОТЫ (react only)

// Для начала нужно установить node.js - https://nodejs.org/en/

// Для создание проекта в консоль:
//      npm install --global yarn           - установка yarn
//      yarn create react-app {app_name}    - создание проекта
//      cd {app_name}
//      yarn start

//      To create a production build, use yarn build.

//      документация react: https://react.dev/learn
//      документация jsx:   https://ru.legacy.reactjs.org/docs/introducing-jsx.html

//      после создания можно сразу удалять:
//          src:
//              App.test.js
//              logo.svg
//              reportWebVitals.js
//              setupTests.js
//          index.js: 
//              5 строка 
//              11-16 строки
//          App.js:
//import './App.css';
//
//function App() {
//    return (
//        <div className="App">
//  
//        </div>
//    );
//}
//  
//export default App;

// *****************************************************************************************
// JSX 


// - Импорт CSS  -----------------------------------------------
import './index.css';



// - Функция внутри константы  ---------------------------------
const my_func = () => {                     // ФУНКЦИЯ описаная ВНУТРИ КОНСТАНТЫ
    console.log('function')                 // Код что будет исполнятся про упоминании константы в коде
}
let q = 'some text';

<>
<h1 onClick={my_func + ' + click'}          // Элемент html в {} которого можно зашить любой js код
    onMouseEnter={my_func + ' + mouse hower'}> {q}
</h1>



--- className \ id ----------------------------------------------
<p className='class_name'   // className что бы не конфликтовать с class из ООП
   id='id_name'             // id это id 
    ></p>



--- Компоненты ввиде функций html -------------------------------
{
function Header_f() {   // Можно описать компонент ввиде функции (или константы как выше)...
    return (
        <header>Site header</header>
    )
}
}
<Header_f />        <s  // ...что бы потом его вызвать как html тэг
></s> 



--- Компоненты ввиде class ---------------------------------------
{
class Body_c extends React.Component {      // Описание компонента ввиде класса
//              ^ указание что компонент наследует фукнционал от библиотеки классов реакт
    help_text = 'help text'
    // ^ без 'let', тупо как
    return () {
        <body>
            *Some component* + {this.help_text}
        </body>
        //                        ^ при обращении к переменной этого же класса нужно указывать 'this'
    }
}
}
<Body_c />       

{
// ПЕРЕДАЧА ПЕРЕМЕННЫХ ПРИ ВЫЗОВЕ КЛАССА
class Body_c2 extends React.Component {
    return () {
        <header>{this.props.title}</header>
        //                    ^ сама переменная которую передали ранее   (установить новое значние нельзя)
        //              ^ встроеная кака для обращения к переменным которые передаются при вызове класса
        //        ^ обращение к переменной этого же класса
    }
}
}
<Body_c title='Site Header'
//</>     ^ можно передавать значения через переменные таким способом
/>



--- Разбитие кода разных компонентов на несколько файлов ---------
{
//import Header from './Header'
// ^ импорт файла с компонентом (например с хэдэром)

// каждый компонент в целом принято всоздавать в отдельном файле

// файл Header.js скорочено:
//"
//import React from "react"
//class Header extends React.Component
//    return *header* 
//export default Header
//"

// Вызов самого компонента в коде:
} 
<Header />



--- Подключение изображений -------------------------------------
</>

import logo from './img/logo.png'
{
//      ^ изображения для использования нужно импортировать 
class Image extends React.Component {
    render() {
        return (
            <img src={this.props.image}/>      
        )
    }
}

<Image image={logo}/>
}


<>
--- Cостояния ---------------------------------------------------



--- Хуки --------------------------------------------------------



</>