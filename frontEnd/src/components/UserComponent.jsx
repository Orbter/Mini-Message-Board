import userPhoto from '../assets/userFace.svg';
import { userColorGenerate } from '../utils/userColorGenerate';
import { useMemo } from 'react';
function UserComponent({ name }) {
  const color = useMemo(() => userColorGenerate(), []);

  return (
    <div className='flex gap-3'>
      <div
        className='rounded-full flex justify-center items-center w-9 h-9'
        style={{ backgroundColor: color }}
      >
        <img className='w-full h-full object-cover' src={userPhoto}></img>
      </div>
      <h4 className='inter font-medium text-black text-base flex justify-center items-center'>
        {name}
      </h4>
    </div>
  );
}
export { UserComponent };
