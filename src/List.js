import React, { useState } from 'react';
import cn from 'classnames';
import {
  BsFillCursorFill, BsFillEnvelopeFill,
  BsFillGiftFill, BsAlarm,
  BsAlarmFill, BsPlus
} from "react-icons/bs";

import { SiMinutemailer } from "react-icons/si";
import { MdDone } from "react-icons/md";


const List = ({ id, name, age, image, workplace, description }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div class="underline">
      <article key={id} className="person">
        <img class={cn('normalview', { pushImage: showDetails })} src={image} alt={name} />
        <div 
        // class={cn({ pushText: showDetails })}
        >
          <p
          class={cn('',{ pushText: showDetails })}
          >
            <h4 class="birthdayinfo">{name}</h4>
            <button class="infobtn"
              onClick={(id) => {
                setShowDetails(!showDetails);
              }}
            >
              {showDetails ? 'Close' : 'Show Details'}
            </button>
          </p>
          <p>{age} years</p>
          <p class="companyinfo">{showDetails ? workplace : `${workplace.substring(0, 0)}`}</p>
          <p class="designation">{showDetails ? description : `${description.substring(0, 0)}`}</p>
          <p class="wishTitle">{showDetails ? <p><BsFillEnvelopeFill className="emailIcon"/>  Wish the birthday boy/girl</p> : `${workplace.substring(0, 0)}`}</p>
          <div className="sendmessage">
            {showDetails 
            ? <textarea
            // className={cn('TextArea', { pushImage: showDetails })}
              placeholder='Write a mail here...'
            >
            </textarea>
            : ''
            }

            {showDetails 
            ? <button
              className="mailicons"
            >
              <SiMinutemailer className="sendIcon"/>
            </button>
            : ''
            }
            

          </div>

        </div>

      </article>
    </div>
  );
};

export default List;
