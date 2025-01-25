import userPhoto from '../assets/userFace.svg';
import userColorGenerate from '../utils/userColorGenerate';
function UserComponent({ name }) {
  return (
    <div className='flex '>
      <div
        className={`rounded-full flex justify-center items-center w-16 h-16 bg-[${userColorGenerate}]`}
      >
        <img className='w-full h-full object-cover' src={userPhoto}></img>
      </div>
      <h4 className='inter font-medium text-black text-lg'>{name}</h4>
    </div>
  );
}
export { UserComponent };
