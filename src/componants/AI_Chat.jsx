import { useState, useRef, useEffect } from 'react'

function AIChat() {

  const [messages, setMessages] = useState([
    {
      role: 'bot',
      text: "Hello! I'm Yash's AI assistant. You can ask me about his tech stack, project experience, or availability. What would you like to know?",
    },
  ])

  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const bottomRef = useRef(null)

  // auto scroll to latest message
  useEffect(() => {
   
  }, [])

  // ══════════════════════════════════════════════════════
  // 🔌 BACKEND / AI INTEGRATION POINT
  // Replace the content of this function with your API call
  //
  // Example with OpenAI:
  // const res = await fetch('/api/chat', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ message: question })
  // })
  // const data = await res.json()
  // return data.reply
  //
  // Example with Gemini / any LLM:
  // const res = await fetch('YOUR_API_URL', { ... })
  // const data = await res.json()
  // return data.candidates[0].content.parts[0].text
  // ══════════════════════════════════════════════════════
  const getAIReply = async (question) => {
    // 🔁 TEMPORARY: remove this when you connect real backend
    const msg = question.toLowerCase()
    await new Promise(r => setTimeout(r, 800)) // simulate delay

    if (msg.includes('java') || msg.includes('spring'))
      return "Yash has 3+ years of experience in Java, primarily focusing on Spring Boot for building enterprise-grade backend services. Recently, he has been specializing in integrating Large Language Models (LLMs) into these services using LangChain and OpenAI API to create automated workflows."
    if (msg.includes('ai') || msg.includes('llm') || msg.includes('rag'))
      return "Yash specializes in Generative AI — building RAG pipelines, LLM orchestration with LangChain, and integrating OpenAI APIs into production systems."
    if (msg.includes('react') || msg.includes('frontend'))
      return "Yash is proficient in React and Next.js, building high-performance frontend applications with clean component architecture."
    if (msg.includes('project'))
      return "Yash has built 12+ projects including Nexus AI Platform (LLM orchestration), Synthetix Dashboard (analytics), and CloudGuard Sentry (AWS security auditing)."
    if (msg.includes('experience') || msg.includes('work'))
      return "Yash worked as Senior Systems Engineer at TechNova Solutions (2022–Present), Full Stack Developer at Digital Canvas Inc. (2019–2022), and Junior Backend Developer at DataBridge Systems (2017–2019)."
    if (msg.includes('skill') || msg.includes('stack'))
      return "Yash's stack includes Java, Spring Boot, Python, React, Next.js, LangChain, RAG, AWS, Docker and PostgreSQL."
    if (msg.includes('hire') || msg.includes('available') || msg.includes('contact'))
      return "Yash is open to new opportunities! Reach him at yashj8029@gmail.com — he typically responds within 24 hours."

    return "Great question! I can tell you about Yash's tech stack, projects, work experience, skills or availability. What would you like to know?"
  }

  const handleSend = async () => {
    if (!input.trim() || isTyping) return

    // 1. add user message
    const userText = input.trim()
    setMessages(prev => [...prev, { role: 'user', text: userText }])
    setInput('')
    setIsTyping(true)

    try {
      // 2. get reply from AI / backend
      const reply = await getAIReply(userText)
      // 3. add bot reply
      setMessages(prev => [...prev, { role: 'bot', text: reply }])
    } catch (err) {
      setMessages(prev => [...prev, { role: 'bot', text: 'Sorry, something went wrong. Please try again.' }])
      console.error('Error fetching AI reply:', err)
    } finally {
      setIsTyping(false)
    }
  }

  return (
    <section
      id="ai-chat"
      className="bg-[#E7ECEF] py-20 px-6 md:px-10 lg:px-16"
    >
      <div className="max-w-2xl mx-auto">

        {/* OUTER CARD */}
        <div className="bg-white rounded-2xl border border-[#E2EAF0] shadow-md overflow-hidden">

          {/* ── HEADER ── */}
          <div className="flex items-center gap-3 px-6 py-4 border-b border-[#E2EAF0] bg-white">

            {/* AVATAR with green dot */}
            <div className="relative flex-shrink-0">
              <div className="w-11 h-11 rounded-full bg-[#274C77] flex items-center justify-center text-white text-sm font-bold overflow-hidden">
                {/* swap this div for your photo:
                    <img src="/src/assets/profile.jpg" className="w-full h-full object-cover" /> */}
                YJ
              </div>
              {/* green online dot */}
              <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-400 border-2 border-white"></div>
            </div>

            <div>
              <div className="font-bold text-[#274C77] text-base leading-tight">Portfolio Assistant</div>
              <div className="text-[10px] text-green-500 font-semibold tracking-widest uppercase mt-0.5">
                System Online
              </div>
            </div>

          </div>

          {/* ── MESSAGES AREA ── */}
          <div className="h-72 overflow-y-auto px-6 py-5 flex flex-col gap-4 bg-white">

            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex items-start gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                {/* bot icon — only for bot messages */}
                {msg.role === 'bot' && (
                  <div className="w-9 h-9 rounded-xl bg-[#274C77] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <rect x="3" y="8" width="18" height="13" rx="2"/>
                      <path d="M8 8V6a4 4 0 018 0v2"/>
                      <circle cx="9" cy="14" r="1" fill="white"/>
                      <circle cx="15" cy="14" r="1" fill="white"/>
                    </svg>
                  </div>
                )}

                {/* bubble */}
                <div className={`max-w-xs md:max-w-sm text-sm leading-relaxed px-4 py-3 rounded-2xl ${
                  msg.role === 'user'
                    ? 'bg-[#274C77] text-white rounded-tr-sm'
                    : 'bg-[#F1F4F6] text-[#274C77] rounded-tl-sm border border-[#E2EAF0]'
                }`}>
                  {msg.text}
                </div>

              </div>
            ))}

            {/* typing dots */}
            {isTyping && (
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#274C77] flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <rect x="3" y="8" width="18" height="13" rx="2"/>
                    <path d="M8 8V6a4 4 0 018 0v2"/>
                    <circle cx="9" cy="14" r="1" fill="white"/>
                    <circle cx="15" cy="14" r="1" fill="white"/>
                  </svg>
                </div>
                <div className="bg-[#F1F4F6] border border-[#E2EAF0] px-4 py-3 rounded-2xl rounded-tl-sm flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#6096BA] animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 rounded-full bg-[#6096BA] animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 rounded-full bg-[#6096BA] animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* ── INPUT ROW ── */}
          <div className="px-6 py-4 bg-[#F8FAFC] border-t border-[#E2EAF0]">
            <div className="flex items-center gap-3 bg-white border border-[#E2EAF0] rounded-xl px-4 py-2.5 shadow-sm">

              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask my portfolio about me..."
                className="flex-1 outline-none text-sm text-[#274C77] placeholder-gray-300 bg-transparent"
              />

              {/* SEND BUTTON — dark navy blue square with → arrow */}
              <button
                onClick={handleSend}
                disabled={isTyping || !input.trim()}
                className="w-9 h-9 bg-[#274C77] rounded-lg flex items-center justify-center flex-shrink-0 hover:bg-[#6096BA] transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AIChat