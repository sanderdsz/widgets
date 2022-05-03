import {CloseButton} from "./CloseButton";

import bugImageUrl from '../assets/Bug.svg';
import ideaImageUrl from '../assets/Idea.svg';
import thoughtImageUrl from '../assets/Thought.svg';

const feedbackTypes = {
  BUG: {
    title: 'Problem',
    image: {
      source: bugImageUrl,
      alt: 'Bug image'
    }
  },
  IDEA: {
    title: 'Feature',
    image: {
      source: ideaImageUrl,
      alt: 'Light image'
    }
  },
  OTHER: {
    title: 'Other',
    image: {
      source: thoughtImageUrl,
      alt: 'Though image'
    }
  }
}

export function WidgetForm() {
  return (
    <div className='bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto'>
      <header>
        <span className='text-xl leading-6'>Leave your feedback</span>
        <CloseButton/>
      </header>
      <div className='flex py-8 gap-2 w-full'>
        {Object.entries(feedbackTypes).map(([key, value]) => {
            return (
              <button
                key={key}
                className='bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none'
                type='button'
              >
                <img src={value.image.source} alt={value.image.alt}/>
                <span>{value.title}</span>
              </button>
          )}
        )}
      </div>
      <footer className='text-xs text-neutral-400'>
        Made with ♥︎ by <a className='underline underline-offset-2' target='_blank' href='https://sander.dev.br'>Sander</a>
      </footer>
    </div>
  )
}
