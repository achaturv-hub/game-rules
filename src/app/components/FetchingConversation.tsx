type FetchingConversationCardProps  = {
  currentQuestion: string;
}

const FetchingConversationCard = ({ currentQuestion } : FetchingConversationCardProps) => {

  return(
    <div className="flex flex-col w-full text-[16px] gap-6">
      <div className=" flex w-fit place-self-end p-4  rounded-[20px] bg-white/5  break-all max-w-[50vw]">
        {currentQuestion}
      </div>
      <div  className=" flex w-fit  place-self-start max-w-[50vw]">
        <div className="flex flex-row gap-1">
          <div className="h-3 w-3 rounded-full bg-white animate-bounce-ball " />
          <div className="h-3 w-3 rounded-full bg-white animate-bounce-ball-500" />
          <div className="h-3 w-3 rounded-full bg-white animate-bounce-ball-1000" />
        </div>
      </div>
    </div>
  )

}

export default FetchingConversationCard;