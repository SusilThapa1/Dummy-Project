"use client";
import React, { useState } from "react";
import { LuPlus } from "react-icons/lu";

const Page = () => {
  const questionAnswers = [
    {
      question: "What is your name?",
      answer:
        "Shirish Thapa Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, voluptatibus obcaecati. Nemo, eligendi impedit! Consequuntur odio magni voluptas omnis laboriosam.",
    },
    {
      question: "Where are you from?",
      answer:
        "Bardibas, Mahottari Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, voluptatibus obcaecati. Nemo, eligendi impedit! Consequuntur odio magni voluptas omnis laboriosam.",
    },
    {
      question: "What do you do?",
      answer:
        "Student Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, voluptatibus obcaecati. Nemo, eligendi impedit! Consequuntur odio magni voluptas omnis laboriosam.",
    },
    {
      question: "What is your aim?",
      answer:
        "Become a billionaire. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, voluptatibus obcaecati. Nemo, eligendi impedit! Consequuntur odio magni voluptas omnis laboriosam.",
    },
    {
      question: "Why you choose Programming?",
      answer:
        "Just for fun Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, voluptatibus obcaecati. Nemo, eligendi impedit! Consequuntur odio magni voluptas omnis laboriosam.",
    },
  ];

  const [visibleAnswerIndex, setVisibleAnswerIndex] = useState(null);

  const toggleAnswer = (index) => {
    setVisibleAnswerIndex(visibleAnswerIndex === index ? null : index);
  };

  return (
    <div className="mx-auto py-3 w-[70%] flex flex-col justify-center items-center gap-3">
      <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
      {questionAnswers.map((questionAnswer, index) => (
        <div
          key={index}
          className="bg-gray-300 rounded-lg px-2 py-1 w-[50%] text-gray-900  "
        >
          <div className="p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-center ">
              {questionAnswer.question}
            </h1>
            <LuPlus
              onClick={() => toggleAnswer(index)}
              className={`text-3xl font-bold transform transition-transform duration-150 ease-in cursor-pointer ${
                visibleAnswerIndex === index ? "rotate-45" : ""
              }`}
            />
          </div>
          {visibleAnswerIndex === index && (
            <div className="bg-gray-200 rounded-md px-2 py-1 text-lg">
              <p className="text-justify">{questionAnswer.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Page;
