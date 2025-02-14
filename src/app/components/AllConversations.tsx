import React from 'react';
import ConversationCard from './Conversation';
import FetchingConversationCard from './FetchingConversation';

export type Conversation = {
  question: string;
  answer: string;
  sources: string[];
}

type AllConversationsProp = {
  conversations: Conversation[];
  currentQuestion: string;
  isFetching: boolean;
}
const AllConversations = ({ conversations, currentQuestion, isFetching }: AllConversationsProp) => {

  return (
    <div className="p-4 relative">
      <div className="p-4">
        {conversations.map((conversation, i) =>
          <div id={`conversation-${i}`} key={i}>
            <div  className="flex flex-col gap-1">
              <ConversationCard conversation={conversation} />
            </div>
          </div>
        )}
        {isFetching && currentQuestion &&
          <FetchingConversationCard currentQuestion={currentQuestion} />
        }
      </div>
    </div>
  );
};

export default AllConversations;