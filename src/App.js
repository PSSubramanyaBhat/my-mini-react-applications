import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data);
  const newObj = {}
  return <main>
    <section className="container">
      <div class="flexcontainer">
        <h3>{people.length} birthdays today</h3>
        <button class="addbutton"
          onClick={() => {
            // data.push({
            //   id: 6,
            //   name: 'Bertie Yates',
            //   age: 29,
            //   image:
            //     'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
            // });

            // setPeople(data);
            
            // console.log(data);
            // console.log(people);
            
          }}
        >+</button>
      </div>
      <List people={people}>
      </List>
      <button onClick={() => setPeople([])}>
        Clear all
    </button>
    </section>
  </main>;
}

export default App;
