import React, { useEffect, useState } from 'react';
import data from './data';
import List from './List';
import cn from 'classnames';

import { readFromStorage, writeToStorage } from './LocalStorage';
import {
  BsArrowLeftShort, BsArrowRightShort,
  BsFillGiftFill, BsAlarm,
  BsAlarmFill, BsPlus
} from "react-icons/bs";

const sampleList = [
  24,
  25,
  26,
  27,
  28
];

const sampleid = [
  6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16
];

// const sampleData = [

// ];

const ENTRY = 'Entry';

const newvarnum = 5;

function App() {
  // const [people, setPeople] = useState(data);
  const [people, setPeople] = useState(() => readFromStorage(ENTRY) || []);
  const [refresh, setRefresh] = useState(false);

  const [generateID, setGenerateID] = useState(6);

  const [dateSelected, setDateSelected] = useState(0);

  /*  //This is later function to select dates...
  const goToDate = (date_number) => {
    // setHighlightMessage(date_number);
    setDateSelected(date_number);
    // return dispMsg[messageNumber];
  };
  */

  useEffect(() => {
    writeToStorage(ENTRY, data);
    // writeToStorage(ENTRY, []);
  });

  // const newObj = {}
  return <main>
    <section className="container">

      <p className="month">December</p>
      <div class="flexcontainer2">
        <button
          className="navigationArrow2"
          onClick={() => { }

          }
        >
          <BsArrowLeftShort />
        </button>
        {
          sampleList.map((person, index) => {
            return (
              <button className={cn('dates', { selectedDates: dateSelected })}
                onClick={
                  () => {
                    // goToDate(index);
                  }
                }
              >
                {sampleList[index]}
              </button>
            );

          })
        }
        <button
          className="navigationArrow2"
          onClick={() => { }

          }
        >
          <BsArrowRightShort />
        </button>
      </div>

      <div class="flexcontainer">
        {refresh
          ? ''
          : <h3><BsFillGiftFill className="bdayIcon" /> {people.length} birthdays today</h3>
        }
        <button class="addbutton"
          onClick={() => {
            setGenerateID((x) => x + 1);

            const newObj = {
              id: generateID,
              name: 'Bertie Yates',
              age: 29,
              image:
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
              workplace: 'Yahoo Company',
              description: 'Hi, I am a front end developer, and I like to draw and sing',
            };

            data.push(newObj);

            // console.log(data);
            // setPeople(data);

            // setPeople([...data, newObj]);
            writeToStorage(ENTRY, data);

          }}
        >
          {/* <BsPlus/> */}
        +
        </button>
      </div>

      {/* This below snippet is to call all dtata values in data api in the form of <List/> class */}
      {
        people.map((person) => {
          return <List key={person.id} {...person} />
        })
      }

      {refresh
        ? <div class="NoBirthday">
          <img
            src="https://cdn1.iconfinder.com/data/icons/scenarium-vol-9/128/044_birthday_cake_party_holiday-256.png"
            alt="No Birthday" />
          <p>No Birthdays Today</p>
        </div>
        : ''
      }
      <button onClick={() => {
        setRefresh(!refresh)
        // { refresh ? setPeople(data) : setPeople([]) }//PARTIALLY WORKING...
      }
      }>
        {refresh ? 'Reset' : 'Clear all'}
      </button>

      <div className="navigationDivision">
        <button
          className="navigationArrow"
          onClick={() => { }

          }
        >
          <BsArrowLeftShort />
        </button>

        <p className="pageNumber">Page1</p>
        <button
          className="navigationArrow"
          onClick={() => { }

          }
        >
          <BsArrowRightShort />
        </button>
      </div>
    </section>
  </main>;
}

export default App;
