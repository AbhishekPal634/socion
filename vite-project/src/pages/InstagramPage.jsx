import React from "react";
import InstagramDashboard from "../components/InstagramDashboard";
import Chatbot from "../components/InstagramChatbot";

const InstagramPage = () => {
  return (
    <>
      {/* Dashboard with responsive margin */}
      <div className="flex-1 md:mr-[380px]">
        <InstagramDashboard />
      </div>

      {/* Fixed position Chatbot */}
      <div className="right-0 top-16 bottom-0">
        <Chatbot />
      </div>
    </>
  );
};

export default InstagramPage;
