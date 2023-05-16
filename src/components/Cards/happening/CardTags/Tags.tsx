import { DotsThreeOutline } from '@phosphor-icons/react';
import './Tags.scss';

interface TagsProps {
  tagContry: string
  title:string
  tweets?: string
}

const Tags = ({tagContry, title, tweets}: TagsProps) => {
  return (
    <div className='tag'>
      <div>
      <span className='tag__contry'>{tagContry}</span>
      <h4 className='tag__title'>{title}</h4>
      <span className='tag__number'>{`${tweets} Tweets`}</span>
      </div>

    
      <DotsThreeOutline weight="fill" />
    </div>
  );
}

export default Tags;
