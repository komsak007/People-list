import React from 'react';
import ReactDOM from 'react-dom';

const Person=({img,name,job})=>{
  const url=`https://randomuser.me/api/portraits/thumb/men/${img}.jpg`
  return(
    <article>
      <img src={url}/>
      <h2>Name:{name}</h2>
      <h3>Job:{job}</h3>
    </article>
  )
}

const PeopleList=()=>{
  return(
    <section>
      <Person img="1" name="Komsak" job="Programmer"/>
      <Person img="34" name="Kamkon" job="Designer"/>
      <Person img="76" name="JOJO" job="Tester"/>
    </section>
  )
}

ReactDOM.render(<PeopleList/>,document.getElementById('root'));
