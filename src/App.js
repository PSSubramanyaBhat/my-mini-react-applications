import React, { useEffect, useState } from 'react';
import data from './data';
import List from './List';
import cn from 'classnames';

import Modal from "react-modal";  //DIALOG BOX.....
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import { readFromStorage, writeToStorage } from './LocalStorage';
import {
  BsArrowLeftShort, BsArrowRightShort,
  BsFillGiftFill, BsAlarm,
  BsAlarmFill, BsPlus
} from "react-icons/bs";

import { GrFormClose, GrEdit } from "react-icons/gr";
import { MdModeEdit } from "react-icons/md";
import { RiCloseCircleLine, RiCloseCircleFill, RiEdit2Fill } from "react-icons/ri";

import {AiOutlineCheckCircle, AiTwotoneCheckCircle} from "react-icons/ai";

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

const ENTRY = 'Entry';


Modal.setAppElement("#root");   //DIALOG BOX.....

function App() {
  const [people, setPeople] = useState(() => readFromStorage(ENTRY) || []);
  const [refresh, setRefresh] = useState(false);

  const [generateID, setGenerateID] = useState(6);

  const [dateSelected, setDateSelected] = useState(0);

  const [isOpen, setIsOpen] = useState(false);   //DIALOG BOX.....

  function toggleModal() {
    setIsOpen(!isOpen);
  }   //DIALOG BOX.....




  // function popUpBox() {
  //   return (
  //     <Popup trigger={<button> Trigger</button>} position="right center">
  //       <div>Popup content here !!</div>
  //     </Popup>
  //   );
  // }



  // const Modal = () => (
  //   <Popup trigger={<button className="button"> Open Modal </button>} modal>
  //     <span> Modal content </span>
  //   </Popup>
  // );





  useEffect(() => {
    writeToStorage(ENTRY, data);
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
            toggleModal();   //DIALOG BOX......
            // popUpBox();



            /*setGenerateID((x) => x + 1);

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
            // setPeople([...data, newObj]);
            writeToStorage(ENTRY, data);*/  //PARTIALLY WORKING......


          }}
        >
          {/* <BsPlus/> */}
        +
        </button>


        {/* THIS CODE SNIPPET BELOW IS FOR DIALOG BOX...... */}
        <Modal

          isOpen={isOpen}
          onRequestClose={toggleModal}
          contentLabel="My dialog"
          className="mymodal"
          overlayClassName="myoverlay"
          closeTimeoutMS={500}
        >
          {/* <div>Add Details hdfhisdflsdgjsbbgjkbskjvnvvn hdfhisdflefefefefe</div> */}
          {/* <button onClick={toggleModal}>Close modal</button>
          <button onClick={toggleModal}>Close modal</button>

          <button onClick={toggleModal}>Close modal</button>
          <button onClick={toggleModal}>Close modal</button> */}

          {/* <h3>Add Details <GrFormClose className="bdayIcon" onClick={toggleModal} /></h3> */}

          <header>
            <RiEdit2Fill className="editIcon" />
            <h3>Add Details</h3>
            <RiCloseCircleLine className="dialogCloseIcon" onClick={toggleModal} />
          </header>

          <h6>Name</h6>
          <textarea
            className="dialogTextArea"
            placeholder='Enter the Name'
          >
          </textarea>

          <h6>Age</h6>
          <textarea
            className="dialogTextArea"
            placeholder='Enter the Age'
          >
          </textarea>

          <h6>Work</h6>
          <textarea
            className="dialogTextArea"
            placeholder='Working at'
          >
          </textarea>


          <h6>About</h6>
          <textarea
            className="dialogTextArea"
            placeholder='Description'
          >
          </textarea>

          {/* <textarea
            className="dialogTextArea"
            placeholder='Birthdate'
          >
          </textarea> */}
          {/* Later for date picker...... */}

          <AiOutlineCheckCircle className="dialogDoneIcon" onClick={toggleModal} />

        </Modal>

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
        let deleteArray = [...data];

        deleteArray.splice(0, deleteArray.length);
        setPeople(deleteArray);

        { refresh ? setPeople(data) : setPeople([]) }//PARTIALLY WORKING...
        // { refresh ? readFromStorage(ENTRY || []) : setPeople(data) }
        // { refresh ? readFromStorage(ENTRY || []) : writeToStorage(ENTRY, deleteArray) }

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
