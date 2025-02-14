"use client"
import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';

type AddQuestionProp = {
  question: string;
  setQuestion: (question: string) => void;
  addQuestion: (e) => void;
  isFetching: boolean;
}
const AddQuestion = ({ question, setQuestion, addQuestion, isFetching } : AddQuestionProp) => {

  const handleSubmit = () => {
    if (question && question.length > 0) {
      addQuestion(question);
    }
  };

  return (
    <div className={classNames("relative", )}>
      <div className="sticky bottom-[20px] w-full z-[10]">
        <div className="w-full relative">
          <div className=" py-sm px-md overflow-y-hidden whitespace-pre-wrap  break-words max-h-[164px] min-h-[44px] invisible leading-[24px]">
            {question}
          </div> 
          <textarea
            className={classNames(
              "absolute right-0 top-0 bottom-0 left-0 py-sm px-md resize-none leading-[24px] text-white bg-[#333333] p-4 rounded-[20px] overflow-hidden outline-none py-2",
              isFetching && "pointer-events-none bg-[#444444]"
            )}
            value={question}
            placeholder='Enter Question to ask...'
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubmit();
              }
            }}
            disabled={isFetching}
          />
        </div>
        <button className=" z-[999] absolute bottom-[12px] right-[20px]" onClick={handleSubmit}>
          <Image alt='arrow-icon' src={"/arrow-icon.png"} height={20} width={20} className=''/>
        </button>
      </div>
    </div>
  );
};

export default AddQuestion;
