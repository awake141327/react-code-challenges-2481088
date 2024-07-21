import { useState, useEffect } from 'react';

export default function DogPics () {
  const [data, setData] = useState();

  async function getData() {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const { message } = await response.json();
    setData(message);
  }
  
  useEffect(() => {
    getData();
  }, [])

  return (
    <div className='dog-pics'>
      <img src={data} />
      <button onClick={getData}>🐶</button>
    </div>
  )
}
