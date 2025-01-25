import { UserComponent } from '../components/UserComponent';
import comment from '../assets/comment.svg';
import repost from '../assets/repost.svg';
import emptyHeart from '../assets/emptyHeart.svg';

function PostFeed({ post }) {
  return (
    <div className='flex flex-col inter'>
      <div>
        <div className='flex'>
          <UserComponent name={post.name} />
          <h4 className='text-[#938B8B] font-medium'>{`@${post.name}`}</h4>
        </div>
        <h4>{post.date}</h4>
      </div>
      <div>
        <p>{post.text}</p>
      </div>
      <div className='flex roboto'>
        <div className='flex text-[#838594]'>
          <img src={comment} />
          <p>{post.commentsCount}</p>
        </div>
        <div>
          <img src={repost} />
          <p>{post.reposts}</p>
        </div>
        <div>
          <img src={emptyHeart} />
          <p>{post.likes}</p>
        </div>
      </div>
    </div>
  );
}
export { PostFeed };
