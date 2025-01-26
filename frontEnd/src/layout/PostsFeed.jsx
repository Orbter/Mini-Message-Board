import { UserComponent } from '../components/UserComponent';
import comment from '../assets/comment.svg';
import repost from '../assets/repost.svg';
import emptyHeart from '../assets/emptyHeart.svg';
import redBorderHeart from '../assets/fullHeart.svg';
import redHeart from '../assets/redheart.svg';
import blueRepost from '../assets/blueRepost.svg';
import { RedHeart } from '../assets/components/redHeart';
import { useRef, useEffect, useState } from 'react';
function PostFeed({ post }) {
  const [isPressed, setIsPressed] = useState({ likes: false, repost: false });
  const [isHover, setIsHover] = useState({
    likes: false,
    repost: false,
  });
  function changeIcon(name) {
    if (name === 'heart') {
      setIsPressed((prevState) => ({
        ...prevState,
        likes: !isPressed.likes,
      }));
    }
    if (name === 'repost') {
      setIsPressed((prevState) => ({
        ...prevState,
        likes: !isPressed.repost,
      }));
    }
  }
  function hoverChanger(svgName) {
    if (svgName === 'heart') {
      setIsHover((prevState) => ({
        ...prevState,
        likes: true,
      }));
    } else if (svgName === 'repost') {
      setIsHover((prevState) => ({
        ...prevState,
        repost: true,
      }));
    }
  }
  function hoverLeave(svgName) {
    if (svgName === 'heart') {
      setIsHover((prevState) => ({
        ...prevState,
        likes: false,
      }));
    } else if (svgName === 'repost') {
      setIsHover((prevState) => ({
        ...prevState,
        repost: false,
      }));
    }
  }
  return (
    <div className='flex flex-col inter bg-[#FDFFFD] p-4 cursor-pointer border-b border-[#D2D4D7]'>
      <div>
        <div className='flex justify-between'>
          <div className='flex gap-2'>
            <UserComponent name={post.name} />
            <h4 className='text-[#938B8B] font-medium flex items-center'>{`@${post.name}`}</h4>
          </div>
          <h4 className='flex items-center text-base'>{post.date}</h4>
        </div>
      </div>
      <div>
        <p className='mb-2'>{post.text}</p>
      </div>
      <div className='flex roboto gap-4 justify-end text-sm'>
        <div className='flex text-[#838594] items-center '>
          <div className=' flex rounded-full  w-8 h-8 items-center justify-center'>
            <div className='w-5 h-4 mt-1'>
              <img src={comment} className='w-full h-full object-cover' />
            </div>
          </div>
          <p className='mt-1'>{post.commentsCount}</p>
        </div>
        <div
          className='flex text-[#838594] items-center '
          onMouseEnter={() => hoverChanger('repost')}
          onMouseLeave={() => hoverLeave('repost')}
          onClick={() => changeIcon('repost')}
        >
          {isHover.repost ? (
            <div
              className={`rounded-full w-7 h-7 flex items-center justify-center ${
                isHover.repost ? 'bg-[#41ABF9] bg-opacity-25' : ''
              }`}
            >
              <div className='w-5 h-4 '>
                <img src={blueRepost} className='w-full h-full object-cover ' />
              </div>
            </div>
          ) : isPressed.repost ? (
            <div className='rounded-full  w-7 h-7 flex items-center justify-center'>
              <div className='w-5 h-4 '>
                <img src={blueRepost} className='w-full h-full object-cover ' />
              </div>
            </div>
          ) : (
            <div className='rounded-full  w-7 h-7 flex items-center justify-center'>
              <div className='w-5 h-4 '>
                <img src={repost} className='w-full h-full object-cover ' />
              </div>
            </div>
          )}

          <p className={isHover.repost ? 'text-[#41ABF9]' : ''}>
            {post.reposts}
          </p>
        </div>
        <div
          className='flex text-[#838594] items-center'
          onMouseEnter={() => hoverChanger('heart')}
          onMouseLeave={() => hoverLeave('heart')}
          onClick={() => changeIcon('heart')}
        >
          <div
            className={`flex  w-8 h-8 items-center justify-center rounded-full ${
              isHover.likes ? 'bg-[#F9595F] bg-opacity-25 ' : ''
            }`}
          >
            <div
              className='w-5 h-4 text-[#F9595F]
            '
            >
              {isPressed.likes ? (
                <img
                  src={redHeart}
                  className='w-full h-full object-cover hover:'
                />
              ) : (
                <RedHeart currentColor={'red'} />
              )}
            </div>
          </div>
          <p className={isHover.likes ? 'text-[#F9595F]' : ''}>{post.likes}</p>
        </div>
      </div>
    </div>
  );
}
export { PostFeed };
