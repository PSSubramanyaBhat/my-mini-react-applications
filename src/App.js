import React, { useEffect, useState } from 'react';
import data from './data';
import List from './List';
import cn from 'classnames';
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

const ENTRY = 'Entry';

function App() {
  // const val = new Set(data);
  // const allEntries = [...val];
  // const [people, setPeople] = useState(allEntries);

  const [people, setPeople] = useState(data);
  const [refresh, setRefresh] = useState(false);

  const [dateSelected, setDateSelected] = useState(0);

  /*  //This is later function to select dates...
  const goToDate = (date_number) => {
    // setHighlightMessage(date_number);
    setDateSelected(date_number);
    // return dispMsg[messageNumber];
  };
  */
  // const [people, setPeople] = useState(() => readFromStorage(ENTRY) || []);



  // useEffect(() => {
  //   console.log(data);
  //   setPeople(data);
  // },);


  const newObj = {}
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
            data.push({
              id: 1,
              name: 'Bertie Yates',
              age: 29,
              image:
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
              workplace: 'Yahoo Company',
              description: 'Hi, I am a front end developer, and I like to draw and sing',
            });

            // console.log(data);
            // setPeople(data);

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
        { refresh ? setPeople(data) : setPeople([]) }
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
