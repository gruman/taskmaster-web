import React, { useState, useEffect } from 'react'
import './App.css'
import { Player, Task } from './constants/types'
import samplePlayers from './constants/players'
import sampleTasks from './constants/tasks'
import { FaRegCircleCheck } from "react-icons/fa6"

function App() {

  const [player, setPlayer] = useState<Player | null>(null)
  const [tasks, setTasks] = useState<Task[]>(sampleTasks);
  const [players, setPlayers] = useState<Player[]>(samplePlayers);
  const [enteredCodes, setEnteredCodes] = useState<{ [key: number]: string }>({});
  const [completedCount, setCompletedCount] = useState<number>(0);

  const unlockTask = (e: any, index: number) => {
    e.preventDefault();
    if (tasks && enteredCodes[index] === tasks[index].code) {
      const newTasks = [...tasks];
      newTasks[index].unlocked = true;
      setTasks(newTasks);
    } else {
      alert('Wrong code!');
    }
  };

  const finishTask = (index: number) => {
    if (tasks) {
      const newTasks = [...tasks];
      newTasks[index].completed = true;
      setTasks(newTasks);
    }
  };

  const handleCodeChange = (index: number, value: string) => {
    setEnteredCodes({ ...enteredCodes, [index]: value });
  };

  useEffect(() => {
    if (tasks) {
      setCompletedCount(tasks.filter(task => task.completed).length);
    }
  }, [tasks]);

  return (
    <div className="container">
      <div className="content">
        {
          !player ?
            <div className="center">
              <h1>Who are you?</h1>
              <ul className="player-list">
                {
                  samplePlayers.map(item => {
                    return (
                      <li onClick={() => setPlayer(item)}>
                        {item.name}
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            :
            <>
              <header>
                <h1>{player.name}</h1>
              </header>
              <h2>Tasks complete: {completedCount}/{tasks && tasks.length}</h2>
              <ul className="list">
                {
                  tasks && tasks.map((item, index) => {
                    return (
                      <li key={item.id}>
                        {
                          <div className={item.unlocked && !item.completed ? "col" : "row"}>
                            <div className="task-list">
                              <h3>
                                {item.title}
                              </h3>
                              {
                                !item.unlocked ?
                                  <form onSubmit={e => unlockTask(e, index)}>
                                    <input
                                      className='code'
                                      placeholder="Code"
                                      type="text"
                                      value={enteredCodes[index] || ''}
                                      onChange={(e) => handleCodeChange(index, e.target.value)}
                                    />
                                  </form> :
                                  item.completed ?
                                    <FaRegCircleCheck />
                                    :
                                    ''
                              }
                            </div>
                            {
                              item.unlocked && !item.completed &&
                              <div className="description">
                                <p>{item.description}</p>

                                <button onClick={() => finishTask(index)}>
                                  Finish
                                </button>
                              </div>
                            }
                          </div>
                        }
                      </li>
                    )
                  })
                }
              </ul>
            </>
        }
      </div>
    </div>
  )
}

export default App
