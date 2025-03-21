import axios from "axios";
import { useState } from "react";



const Summify = () => {
  const [summaryData, setSummaryData] = useState("");
  const [summarizedData, setSummarizedData] = useState("");

  const prompt = `Summarize the following content in a structured and concise manner.  
  - If the content is long, provide 15 key points.  
  - If the content is medium-sized, provide 10 key points.  
  - If the content is short, provide 5 key points.  

  Ensure each point is clear, informative, and well-structured.  
  Avoid unnecessary repetition and focus on the most important details.  

  **Content to summarize:**  
  "${summaryData}"`;

  const fetchSummary = async () => {
    if (!summaryData.trim()) {
      alert("Please enter some text to summarize.");
      return;
    }

    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${
          import.meta.env.VITE_GEMENI_API_KEY
        }`,
        {
          contents: [
            {
              parts: [{ text: prompt }],
            },
          ],
        }
      );

      const summarizedContent =
        response.data.candidates?.[0]?.content?.parts?.[0]?.text || "No summary generated.";
      setSummarizedData(summarizedContent);
      setSummaryData(""); 
    } catch (error) {
      console.error("Error fetching summary:", error);
      setSummarizedData("Failed to generate summary. Please try again.");
    }
  };

  return (
    
    <div className="p-[2.5rem]">
      <header className="py-4 text-center text-light" style={{ background: "#02050a" }}>
      <h1>Welcome to Summify.Ai</h1>
      <p>Transform your text content into engaging blog posts effortlessly.</p></header>
      <div className="text-center">
        
        
        <textarea
          className="border-[3px] border-light-300 w-[100%] h-[200px] rounded-2xl p-[1em] 
          placeholder:text-gray-500 placeholder:font-medium text-white 
          focus:ring-[3px] focus:ring-blue-400 outline-none"
          placeholder="Need a quick summary? Paste your text and let AI do the work!"
          value={summaryData}
          onChange={(e) => setSummaryData(e.target.value)}
        ></textarea>

        
        <h2 className="text-white font-bold text-2xl my-4">
          Summarize Your Huge Content
        </h2>
        <button
          className="bg-white-400 text-white font-bold px-5 py-2 rounded-lg btn btn-primary w-40"
          onClick={fetchSummary}
        >
          Summarize
        </button>
      </div>

      
      {summarizedData && (
        <div className="mt-6 p-4 border-3 border-light-500 rounded-lg bg-white-100">
          <div className="flex justify-between">
          <h3 className="text-2xl font-bold text-light">Summary:</h3>
          <div>
            <button className="btn btn-primary text-white font-bold px-5 py-2  " onClick={() => setSummarizedData("")}>
                Clear
            </button>
          </div>
          </div>
          <p className="text-white font-semibold whitespace-pre-line">{summarizedData}</p>
        </div>
      )}
    </div>
  );
};

export default Summify;
