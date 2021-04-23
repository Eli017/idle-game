import logo from './logo.svg';
import {useState, useEffect} from "react";
import './App.css';
import Person from "./GameObjects/Person";

function App() {
    const [count, setCount] = useState(0);
    const [companyOutput, setCompanyOutput] = useState(0);
    const [money, setMoney] = useState(0);
    const [people, setPeople] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            onUpdate();
        }, 1000);
        return () => clearInterval(interval);
    });

    //What happens within each second of the game?
    const onUpdate = () => {
        if (money === 1000000000) {
            alert("Why do you have that much money?");
            setMoney(0);
        }
        setCount(count + 1);
        setMoney(money + companyOutput);
    };

    const addLevel = (level) => {
        const person = new Person(level);
        if (money < person.salary) {
            alert("You're broke. Stop it");
            return;
        }
        setPeople([...people, person])
        setMoney(money - person.salary);
        setCompanyOutput(companyOutput + person.workOutput);
    }

    const getLevelCount = (level) => {
        return people.filter((person) => {
            return person.level === level
        }).length;
    }

    return (
        <div className="App">
          <style>

          </style>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>

                <label>Get to work! Type "Hello World!" to earn some bucks!</label>
                <div className="console">
                    <div className="arrow"> ></div>
                    <input type="text" className="input" onKeyUp={(event) => {
                        if (event.key === "Enter" && event.target.value === "Hello World!") {
                            setMoney(money + 1);
                            event.target.value = "";
                        }
                    }}/>
                </div>

                <div className="container">
                    <div className="row">
                        <div>Money: ${money.toLocaleString('en-US')}</div>
                    </div>
                    <div className="row">
                        <div>Entry Level Employees: {getLevelCount(1)}</div>
                    </div>
                    <div className="row">
                        <div>Junior Level Employees: {getLevelCount(2)}</div>
                    </div>
                    <div className="row">
                        <div>Senior Level Employees: {getLevelCount(3)}</div>
                    </div>
                </div>
              <div className="dev-container">
                Hire Developers
                <div className="dev"><button onClick={() => addLevel(1)}>Entry Level</button> </div>
                  <div className="dev"><button onClick={() => addLevel(2)}>Junior Level</button></div>
                  <div className="dev"> <button onClick={() => addLevel(3)}>Senior Level</button></div>
              </div>
                {/*<button*/}
                {/*    className="App-link"*/}
                {/*    onClick={() => setMoney(money + 1)}*/}
                {/*>*/}
                {/*    Print more money*/}
                {/*</button>*/}
            </header>
        </div>
    );
}

export default App;