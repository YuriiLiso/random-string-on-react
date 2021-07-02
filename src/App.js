import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import './App.css';

const abc = "abcdefghijklmnopqrstuvwxyz0123456789";

const generator = (sting) => {
  let rs = "";
  while (rs.length < 5) {
    rs += sting[Math.floor(Math.random() * sting.length)];
  }
  return rs;
};

function App() {
  const [str, setStr] = useState('');
  const [colorRed, setColorRed] = useState(false);
  const [colorBlue, setColorBlue] = useState(false);
  const [isZero, setIsZero] = useState(false);

  useEffect(() => {
    setInterval(() => {
      let random = generator(abc);

      setStr(() => {
        let palindrom = random.split('').reverse().join('');
        let blue = random.split('').every(el => el >= 0);
        let includesZero = random.split('').some(el => el === '0');

        if (random === palindrom) {
          setColorRed(true);
        } else if (blue) {
          setColorBlue(true);
        } else if (includesZero) {
          setIsZero(true);
        } else {
          setColorRed(false);
          setColorBlue(false);
          setIsZero(false)
        }

        return random;
      });
    }, 3000);
  }, [])

  return (
    <div className="App">
      <div className="describe">
        <div>
          Each value must be 5 characters long.
          The value is displayed every 3 seconds.
        </div>

        <div className="describe__points">
          <div>1) if the created value is a palindrome it is red;</div>
          <div>2) if the created value consists only of numbers, display it in blue;</div>
          <div>3) if created value contains 0 it is not displayed.</div>
        </div>
      </div>
      <div className={classNames('string', {
        'string--blue': colorBlue,
        'string--red': colorRed
      })}>
        {isZero ? (
          ''
        ) : (
          str
        )}
      </div>
    </div>
  );
}

export default App;
