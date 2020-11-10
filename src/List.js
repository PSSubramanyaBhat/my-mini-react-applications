import React, { useState } from 'react';
import cn from 'classnames';
const List = ({ people }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div class="underline">
      {people.map((person) => {
        const { id, name, age, image, workplace, description } = person;
        return <article key={id} className="person">
          <img class={cn('normalview', { detailedview: showDetails})} src={image} alt={name} />
          <div>
            <h4 class="birthdayinfo">{name}</h4>
            <p>{age} years</p>
            {/* <p>{workplace} years</p>
            <p>{description} years</p> */}
            <p class="companyinfo">{showDetails ? workplace : `${workplace.substring(0, 0)}`}</p>
            <p class="designation">{showDetails ? description : `${description.substring(0, 0)}`}</p>
            <p>
              <button class="infobtn"
                onClick={() => {
                  setShowDetails(!showDetails);
                }}
              >
                {showDetails ? 'Close' : 'Show Details'}
              </button>
            </p>
          </div>

        </article>

      })}
    </div>
  );
};

export default List;
