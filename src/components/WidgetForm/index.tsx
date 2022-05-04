import {CloseButton} from "../CloseButton";
import bugImageUrl from '../../assets/Bug.svg';
import ideaImageUrl from '../../assets/Idea.svg';
import thoughtImageUrl from '../../assets/Thought.svg';
import {useState} from "react";
import {FeedbackTypeStep} from "./Steps/FeedbackTypeStep";
import {FeedbackContentStep} from "./Steps/FeedbackContentStep";
import {FeedbackSuccessStep} from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
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

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackSent, setFeedbackSent] = useState(false)

  function handleRestartFeedback() {
    setFeedbackSent(false)
    setFeedbackType(null)
  }

  return (
    <div
      className='bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto'>
      {feedbackSent ? (
        <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback}/>
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep
              onFeedbackTypeChanged={setFeedbackType}
            />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackRestartRequested={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}
      <footer className='text-xs text-neutral-400'>
        Made with ♥︎ by <a className='underline underline-offset-2' target='_blank'
                           href='https://sander.dev.br'>Sander</a>
      </footer>
    </div>
  )
}
