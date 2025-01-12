import LangflowClient from "../services/LangflowClient.js";

export const handleInstagramChat = async (req, res) => {
  const { message } = req.body;

  if (!message || typeof message !== "string") {
    return res.status(400).json({
      response: "Please provide a valid message string",
    });
  }

  const flowId = process.env.INSTAGRAM_FLOW_ID;
  const langflowId = process.env.LANGFLOW_ID;
  const applicationToken = process.env.INSTAGRAM_APPLICATION_TOKEN;

  const client = new LangflowClient(
    "https://api.langflow.astra.datastax.com",
    applicationToken
  );

  try {
    const response = await client.runFlow(
      flowId,
      langflowId,
      message,
      "chat",
      "chat",
      {}, // Tweaks
      false, // Streaming disabled
      () => {}, // No streaming updates
      () => {}, // No stream closure
      (error) => {
        console.error("Stream error:", error);
      }
    );

    // Log the entire response for debugging
    // console.log("Full response:", JSON.stringify(response, null, 2));

    // Extract the message text from the nested response structure
    let botResponse;
    if (response && typeof response === "object") {
      botResponse =
        response?.outputs?.[0]?.outputs?.[0]?.outputs?.message?.text ||
        response?.outputs?.[0]?.outputs?.[0]?.results?.message?.text ||
        response?.outputs?.[0]?.outputs?.[0]?.artifacts?.message ||
        response?.outputs?.[0]?.outputs?.[0]?.messages?.[0]?.message ||
        "I couldn't process that request.";
    } else {
      botResponse = "I couldn't process that request.";
    }

    // Remove extra newlines and trim the response
    botResponse = botResponse.trim().replace(/\n+/g, "\n");

    // Send response in the format expected by the frontend
    res.status(200).json({
      response: botResponse,
    });
  } catch (error) {
    console.error("Error in chatbot interaction:", error);

    // Send error response in the format expected by the frontend
    res.status(500).json({
      response:
        "I'm having trouble processing your request right now. Please try again later.",
    });
  }
};

export const handleTwitterChat = async (req, res) => {
  const { message } = req.body;

  if (!message || typeof message !== "string") {
    return res.status(400).json({
      response: "Please provide a valid message string",
    });
  }

  const flowId = process.env.TWITTER_FLOW_ID;
  const langflowId = process.env.LANGFLOW_ID;
  const applicationToken = process.env.TWITTER_APPLICATION_TOKEN;

  const client = new LangflowClient(
    "https://api.langflow.astra.datastax.com",
    applicationToken
  );

  try {
    const response = await client.runFlow(
      flowId,
      langflowId,
      message,
      "chat",
      "chat",
      {}, // Tweaks
      false, // Streaming disabled
      () => {}, // No streaming updates
      () => {}, // No stream closure
      (error) => {
        console.error("Stream error:", error);
      }
    );

    // Log the entire response for debugging
    // console.log("Full response:", JSON.stringify(response, null, 2));

    // Extract the message text from the nested response structure
    let botResponse;
    if (response && typeof response === "object") {
      botResponse =
        response?.outputs?.[0]?.outputs?.[0]?.outputs?.message?.text ||
        response?.outputs?.[0]?.outputs?.[0]?.results?.message?.text ||
        response?.outputs?.[0]?.outputs?.[0]?.artifacts?.message ||
        response?.outputs?.[0]?.outputs?.[0]?.messages?.[0]?.message ||
        "I couldn't process that request.";
    } else {
      botResponse = "I couldn't process that request.";
    }

    // Remove extra newlines and trim the response
    botResponse = botResponse.trim().replace(/\n+/g, "\n");

    // Send response in the format expected by the frontend
    res.status(200).json({
      response: botResponse,
    });
  } catch (error) {
    console.error("Error in chatbot interaction:", error);

    // Send error response in the format expected by the frontend
    res.status(500).json({
      response:
        "I'm having trouble processing your request right now. Please try again later.",
    });
  }
};
