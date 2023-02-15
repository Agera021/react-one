import check from './svg/check.svg'
import send from './svg/send.svg'
import heart from './svg/heart.svg'
import comment from './svg/comment.svg'
import bmw from './img/bmw.png'
import m1000rr from './img/m1000rr.webp'

import './App.css';

function App() {
  const name = "BMW"
  const surName = "///M"
  const nickName = `@${name.toLowerCase()}_${surName.toLowerCase()}`
  const fullName = `${name} ${surName}`
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = `${day}-${month}-${year}`;

  return (
      <div className='post'>
        <div className='header'>
          <ul className='information'>
            <img className='photo' src={bmw}></img>
            <li className='fullName'>{fullName}</li>
            <img className='post-svg' src={check}></img>
            <li className='nickName'>{nickName}</li>
            <li className='nickName'>{currentDate}</li>
          </ul>
        </div>
        <p className='post-text'>THE BMW M 1000 RR <br></br>RACING LIKE NO OTHER</p>
        <img className='post-img' src={m1000rr}></img>
        <div className='footer'>
          <ul className='likes-info'>
            <div className='message-box'>
              <img className='post-svg' src={heart}></img>
              <p className='post-information'>999</p>
            </div>
            <div className='message-box'>
              <img className='post-svg' src={comment}></img>
              <p className='post-information'>873</p>
            </div>
            <div className='message-box'>
              <img className='post-svg' src={send}></img>
              <p className='post-information'>562</p>
            </div>
           
          </ul>
        </div>
      </div>
  );
}

export default App;
