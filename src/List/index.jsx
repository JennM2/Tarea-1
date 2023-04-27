import React, { useState, useEffect } from 'react';
import './styles.css';

const generateAvatar = (count) => {
  const avatar = [];
  for (let i = 0; i < count; i++) {
    const ramdom = Math.floor(Math.random() * 100);
    avatar.push(`https://avatars.dicebear.com/api/bottts/stefan${ramdom}.svg`);
  }
  return avatar;
};

const List = ({ clickHandler }) => {
  const [count, setCount] = useState(1);
  const [list, setList] = useState([]);
  const [selected, setSelected] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setList(generateAvatar(count));
  }, [count]);

  useEffect(() => {
    setSelected(list[currentIndex] || '');
  }, [list, currentIndex]);

  const handlePrev = () => {
    setCurrentIndex(Math.max(currentIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex(Math.min(currentIndex + 1, list.length - 1));
  };

  const handleItemClick = (item, index) => {
    setSelected(item);
    setCurrentIndex(index);
    clickHandler(item);
  };

  return (
    <div className='wrapper'>
      <div className='list-wrapper'>
        <h2>Lista</h2>     
        <ul>
          {list.map((item, index) => (
            <li key={index} onClick={() => handleItemClick(item, index)}>
              <img src={item} alt={`Avatar ${index}`} />
            </li>
          ))}
        </ul>
      </div>
      <div className='selected-wrapper'>
        
        <img src={selected} alt='Selected Avatar' />
        <div className='controls'>
          <button onClick={handlePrev} disabled={currentIndex === 0}>
            Anterior
          </button>
          <input type='number' value={count} onChange={(event) => setCount(Number(event.target.value))} min='1'/>
          <button onClick={handleNext} disabled={currentIndex === list.length - 1}>
            Siguiente
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default List;

