import { UserComponent } from '../components/UserComponent';
function Post() {
  return (
    <div className='bg-white border-spacing-1 border-customGrayBorder flex flex-col'>
      <div>{UserComponent}</div>
      <form>
        <input
          type='text'
          placeholder='write something!'
          className='placeholder-[#767B87] text-black'
        />
      </form>
      <button className='bg-[#1D9BF0] text-white poppins font-bold rounded-2xl flex justify-center items-center'>
        Post
      </button>
    </div>
  );
}
export { Post };
