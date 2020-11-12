import React, { useState } from 'react';
import data from './data';
import List from './List';
import {
  BsArrowLeftShort, BsArrowRightShort,
  BsFillGiftFill, BsAlarm,
  BsAlarmFill, BsPlus
} from "react-icons/bs";

function App() {
  const [people, setPeople] = useState(data);
  const [refresh, setRefresh] = useState(false);
  // const newObj = {}
  return <main>
    <section className="container">
      <div class="flexcontainer">
        {/* <h3><BsFillGiftFill className="bdayIcon" /> {people.length} birthdays today</h3> */}
        {refresh
          ? ''
          : <h3><BsFillGiftFill className="bdayIcon" /> {people.length} birthdays today</h3>
        }
        <button class="addbutton"
          onClick={() => {
            data.push({
              id: 6,
              name: 'Bertie Yates',
              age: 29,
              image:
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
            });

            // setPeople(data);

            console.log(data);
            // console.log(people);

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
