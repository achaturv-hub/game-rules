"use client"
import React, { useEffect, useState } from 'react';
import AllConversations, { Conversation } from "./components/AllConversations";
import api from './api';
import AddQuestion from './components/AddQuestion';
import Image from 'next/image';

export default function Home() {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [question, setQuestion] = useState('');
  const [ isFetching, setIsFetching] = useState(false);

  const fetchConversations = async () => {
    try {
      const response = await api.get('/conversation');
      setConversations(response.data.allConversations);
    } catch (error) {
      console.error("Error fetching conversations", error);
    }
  };

  const sendConversation = async (question) => {
    setIsFetching(true)
    try {
      await api.post('/conversation',{ question: question, answer: "", sources: [] })
        .then(() => {
          scrollToElement(`conversation-${conversations.length-1}`)
          setIsFetching(false)
          setQuestion('')
        }
      );
      fetchConversations();
    } catch (error) {
      console.error("Error Sending question", error);
    }
    
  };

  const clearAllConversation = async () => {
    try {
      await api.delete('/conversation');
    } catch (error) {
      console.error("Error clearing conversations", error);
    }
    
  };

  const scrollToElement= (id) => {
    const element = document.getElementById(id);
    if(element) {
      element.scrollIntoView({behavior: "smooth", block: "start"})
    }
  }

  useEffect(() => {
    clearAllConversation()
  },[])
  
  useEffect(() => {
    fetchConversations();
  }, []);

  return (
    <div className="relative">
      <section className=" bg-[#333333] w-full p-4 h-[100px] sticky z-[10] top-0">
        <div className="flex flex-col max-w-[1125px] relative mx-auto">
          <div className="flex items-center gap-1 ">
            <Image alt='arrow-icon' src={"/chat-bot-icon.png"} height={50} width={50} className=''/>
            <h3 className="text-left text-[32px] font-semibold relative"> GameRules Ai</h3>
          </div>
          <p className="ml-[3.5rem] text-[14px] text-white/50"> Supported games: Monopoly and Codenames </p>
        </div>
      </section>
      <div id={"all-conversations"} className="px-auto max-w-[1125px] mx-auto min-h-[calc(100vh-200px)] relative z-0">
        <AllConversations  conversations={conversations} currentQuestion={question} isFetching={isFetching} />
      </div>
      <section className="  w-full p-4 min-h-[80px] max-w-[1125px] mx-auto sticky z-[10] bottom-0">
        <AddQuestion addQuestion={sendConversation} question={question}  setQuestion={setQuestion} isFetching={isFetching}/>
      </section>
    </div>
  );
}
