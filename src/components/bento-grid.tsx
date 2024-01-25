import { cn } from '@/lib/utils';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ',
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  content,
  date,
  image,
  slug,
  title,
}: {
  className?: string;
  content?: any;
  date?: string;
  image?: string | React.ReactNode;
  slug?: string;
  title?: string;
}) => {
  return (
    <div
      className={cn(
        'row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4',
        className
      )}
    >
      {image}
      <div className='group-hover/bento:translate-x-2 transition duration-200'>
        <div className='font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2'>
          {title}
        </div>
        <div className='font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300'>
          {date}
        </div>
        <div className='font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300'>
          {documentToHtmlString(content)}
          
        </div>
        <a href={`projects/${slug}`} className='text-blue-500 text-xs'>
          Read More
        </a>
      </div>
    </div>
  );
};
