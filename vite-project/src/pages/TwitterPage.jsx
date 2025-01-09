import React from "react";
import TwitterDashboard from "../components/TwitterDashboard";
import Chatbot from "../components/TwitterChatbot";

const TwitterPage = () => {
  return (
    <>
      {/* Dashboard with responsive margin */}
      <div className="flex-1 md:mr-[380px]">
        <TwitterDashboard />
      </div>

      {/* Fixed position Chatbot */}
      <div className="right-0 top-16 bottom-0">
        <Chatbot />
      </div>
    </>
  );
};

export default TwitterPage;
