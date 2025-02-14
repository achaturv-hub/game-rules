import classNames from "classnames"
import { Conversation } from "./AllConversations";


type ConversationCardProps  = {
  conversation: Conversation;
}

const ConversationCard = ({ conversation }: ConversationCardProps) => {
  const question = conversation.question;
  const answer = '<p>' + conversation.answer.split("\n").join("</p><p>");
  const filterSources = ( source: string) => source.replace(`data\\`, "");
  const sources = conversation.sources.map(source => filterSources(source));


  return(
    <div className={classNames("flex flex-col w-full text-[16px] gap-6")}>
      <div className=" flex w-fit place-self-end p-4  rounded-[20px] bg-white/5  break-all max-w-[50vw]">
        {question}
      </div>
      <div  className=" flex w-fit flex-col  place-self-start  max-w-[50vw]">
        <div className="flex flex-col gap-4" dangerouslySetInnerHTML={ {__html: answer}} />
        {sources.length > 0 &&
          <div className="pt-4 text-white/50 italic">
            Sources: [{conversation.sources.map(source => filterSources(source)).join(", ")}]
          </div>
        }
      </div>
      
    </div>
  )

}

export default ConversationCard;