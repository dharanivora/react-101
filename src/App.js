// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

let showProfile = true;
let profile;

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90
}

const vegetables = [
    { title: "apple", isFruit: true, id: "1"},
    { title: "blueberry", isFruit: true, id: "2"},
    { title: "cherry", isFruit: true, id: "3"},
    { title: "peas", isFruit: false, id: "3"},
];

function App() {
    const [count, setCount] = useState(0)

    function handleClick() {
        setCount(count + 1)
        alert('You clicked me!!!')
    }

    if (showProfile) {
      profile = <UserProfile />
    }

    return (
    <div>
      <h1>Hello, React-101!</h1>
      {profile}
      <ShowVegetableList />
      <MyButton count={count} onClick={handleClick}/>
      <MyButton count={count} onClick={handleClick}/>
      <MyButton count={count} onClick={handleClick}/>
    </div>
  )
}

function ShowVegetableList() {
    return (
        <ul>{ListVegetables}</ul>
    )
}

const ListVegetables = vegetables.map(vegetable =>
    <li key={vegetable.id}
    style={{
        color: vegetable.isFruit ? 'teal' : 'pink' 
    }}
    
    >
        {vegetable.title}
    </li>
);

function MyButton({count, onClick}) {
    // const [count, setCount] = useState(0);

    return (
        <div>
            <button className='btn btn-success' onClick={onClick}>I am created with React!</button>
            <h4
            style={{
                textAlign:'center',
                paddingTop:'20px'
            }}
            >I have been clicked {count} times</h4>
        </div>
    )
}

function UserProfile() {
  return (
    <div className='profile'>
        <h3>User Profile</h3>
        <h4>Username: {user.name}</h4>
        <img 
            src={user.imageUrl} 
            alt={'Photo of ' + user.name}
            style={{
                width: user.imageSize,
                height: user.imageSize
            }}
        />
    </div>
  )
}

export default App;
