import React from "react";

<>-- useState --------------------------------------------------------</>
//      ^ используется для хранения данных о состоянии внутри своих переменных
import { useState } from 'react'

function State() {
    const [count, setCount] = useState(0);
    //                                 ^ начальное значение
    //               ^ функция ипользующаяся для изменения значния переменной
    //       ^ сама переменная 

    const increment = () => {
        setCount((prevCount) => prevCount + 1);
        //                   ^ стрелочная функция принимающая на начале значние левое и возвращает правое
        //            ^ получает последнее сохраненное значние переменной
    }

    return (
        <div>
            <p>На кнопку нажали {count} раз</p>
            <button onClick={increment}>Нажми</button>
        </div>
    )
}



<>-- useEffect -------------------------------------------------------</>
//      ^ триггер срабатывающий при обновлении или отрисовке компонента
import { useState, useEffect } from 'react'

function Effect() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);
        //                                   ^ при срабатывании триггера будет вызвана эта функция
        //                         ^ условия триггера 
        //      ^ Установка триггера
    }// ничего - будет срабатывать при каждом рендере объекта
     // []     - сработает только первый рендет и дальше похуй
     // [obg]  - сработает при любом изменении значения именно переменной
);
}