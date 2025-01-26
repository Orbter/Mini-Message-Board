import { UserComponent } from '../components/UserComponent';
import { useState } from 'react';
function PostUser() {
  const [characterTotal, setCharacterTotal] = useState(0);
  const handleInput = (e) => {
    setCharacterTotal(e.target.value.length);
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };
  return (
    <div className='bg-white border border-customGrayBorder flex flex-col p-4 w-[90%] rounded-xl'>
      <div>{<UserComponent name={'poding'} />}</div>
      <form>
        <textarea
          maxLength={300}
          rows='1'
          placeholder='write something!'
          onInput={handleInput}
          className='mb-2 mt-2 placeholder-[#767B87] text-sm text-black bg-white w-full'
        ></textarea>
      </form>
      <div className='flex justify-end items-center gap-2'>
        <p
          className={`text-sm inter font-bold ${
            characterTotal === 300
              ? 'text-red-600'
              : characterTotal > 250
              ? 'text-yellow-500'
              : 'text-blue-500'
          }`}
        >{`${characterTotal}/300`}</p>
        <button className='bg-[#1D9BF0] text-white poppins font-bold rounded-2xl flex justify-center items-center w-16 h-8'>
          Post
        </button>
      </div>
    </div>
  );
}
export { PostUser };
