import './App.scss';
import {useEffect, useState} from "react";
import Counter from "../src/counter.js"

function App() {
    const [bgColor, setBgColor] = useState('red');

    useEffect(() => {
        const interval = setInterval(() => {
            // Генерируем случайный цвет
            const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            setBgColor(randomColor);
        }, 1500);

        // Очищаем интервал при размонтировании компонента
        return () => {
            clearInterval(interval);
        };
    }, []);


  return (
    <div className="App">
     <p className="hello" style={{color: bgColor}}>Hello React</p>
        <Counter/>
    </div>
  );
}

export default App;
