import { useState } from 'react'
import emailjs from '@emailjs/browser'

function Contact() {

  // FORM STATE — stores what user types
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: 'Career Opportunity',
    message: '',
  })

  // TOUCHED STATE — tracks which fields user visited (blurred)
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  })

  const [submitted, setSubmitted] = useState(false)
  const [success, setSuccess] = useState(false)
  const [sending, setSending] = useState(false)   // NEW — true while EmailJS request is in flight
  const [sendError, setSendError] = useState('')  // NEW — holds a message if EmailJS fails

  // VALIDATION RULES
  const validate = {
    name: (v) => {
      if (!v.trim()) return 'Full name is required'
      if (v.trim().length < 2) return 'Name must be at least 2 characters'
      return ''
    },
    email: (v) => {
      if (!v.trim()) return 'Email address is required'
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return 'Enter a valid email address'
      return ''
    },
    subject: () => '',
    message: (v) => {
      if (!v.trim()) return 'Message is required'
      if (v.trim().length < 10) return 'Message must be at least 10 characters'
      return ''
    },
  }

  // ERRORS OBJECT
  const errors = {
    name:    validate.name(form.name),
    email:   validate.email(form.email),
    subject: validate.subject(form.subject),
    message: validate.message(form.message),
  }

  // SHOW ERROR — only after blur or submit
  const showError = (field) => (touched[field] || submitted) && errors[field]

  const isFormValid = !errors.name && !errors.email && !errors.message

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleBlur = (e) => {
    setTouched({ ...touched, [e.target.name]: true })
  }

  // UPDATED — now async, actually sends the email via EmailJS
  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitted(true)
    setSendError('')

    if (!isFormValid) return

    setSending(true)

    try {
      await emailjs.send(
        "service_j3axizo",
       "template_qz49zvu",
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
       "K-yHuiNe_Y_wffqQd"
      )
      setSuccess(true)
    } catch (err) {
      console.error('EmailJS send failed:', err)
      setSendError('Something went wrong sending your message. Please try again or email me directly.')
    } finally {
      setSending(false)
    }
  }

  const inputClass = (field) => {
    const base = 'w-full bg-white border rounded-lg px-4 py-3 text-sm text-[#274C77] placeholder-gray-300 outline-none transition-all'
    if (showError(field)) return `${base} border-red-400 focus:border-red-400 bg-red-50`
    if (touched[field] && !errors[field]) return `${base} border-green-400 focus:border-green-400`
    return `${base} border-[#E2EAF0] focus:border-[#6096BA]`
  }

  return (
    <>
      <section id="contact" className="bg-[#E7ECEF] py-10 px-6 md:px-10 lg:px-16">
        <div className="max-w-8xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-14 items-start">

            {/* ════════ LEFT SIDE ════════ */}
            <div className="flex-1 min-w-0">
              <h2 className="text-5xl lg:text-6xl font-bold text-[#274C77] leading-tight mb-5">
                Let's build <br />
                the{' '}
                <span className="text-[#6096BA]">future.</span>
              </h2>
              <p className="text-gray-400 text-sm max-w-xs mb-8 leading-relaxed">
                Currently accepting inquiries for senior engineering roles and
                high-impact AI consultations for 2026.
              </p>

              <div className="flex flex-col gap-3 mb-8">
                <div className="inline-flex items-center gap-3 bg-white border border-[#E2EAF0] rounded-xl px-4 py-3 w-fit shadow-sm">
                  <div className="w-9 h-9 rounded-lg border border-[#A3CEF1] flex items-center justify-center flex-shrink-0">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#274C77" strokeWidth="2">
                      <rect x="2" y="4" width="20" height="16" rx="2"/>
                      <path d="M2 7l10 7 10-7"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-[9px] font-bold text-[#6096BA] uppercase tracking-widest mb-0.5">Email</div>
                    <div className="text-sm font-bold text-[#274C77]">yashj8029@gmail.com</div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-3 bg-white border border-[#E2EAF0] rounded-xl px-4 py-3 w-fit shadow-sm">
                  <div className="w-9 h-9 rounded-lg border border-[#A3CEF1] flex items-center justify-center flex-shrink-0">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#274C77" strokeWidth="2">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                      <circle cx="12" cy="9" r="2.5"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-[9px] font-bold text-[#6096BA] uppercase tracking-widest mb-0.5">Location</div>
                    <div className="text-sm font-bold text-[#274C77]">Gwalior, India 474001</div>
                  </div>
                </div>
              </div>

              <a href="/resume.pdf" download
                className="flex items-center justify-between bg-[#274C77] text-white px-7 py-5 rounded-2xl max-w-xs hover:bg-[#6096BA] transition-all duration-300 group">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-blue-300 mb-1">Download My CV</div>
                  <div className="text-lg font-bold">Latest Resume PDF</div>
                </div>
                <div className="w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center flex-shrink-0 group-hover:bg-opacity-30 transition-all duration-300">
                    <img src='download-svgrepo-com (1).svg'></img>
                </div>
              </a>
            </div>

            {/* ════════ RIGHT SIDE — FORM ════════ */}
            <div className="flex-1 w-full">
              <div className="bg-[#F8FAFC] border border-[#E2EAF0] rounded-2xl shadow-sm p-8">

                {success ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2.5">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-[#274C77] mb-2">Connection Initialized!</h3>
                    <p className="text-sm text-gray-400 mb-6">Thanks! I'll get back to you within 24 hours.</p>
                    <button
                      onClick={() => {
                        setSuccess(false)
                        setForm({ name: '', email: '', subject: 'Career Opportunity', message: '' })
                        setTouched({ name: false, email: false, subject: false, message: false })
                        setSubmitted(false)
                        setSendError('')
                      }}
                      className="text-sm text-[#6096BA] underline hover:text-[#274C77] transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (

                  <form onSubmit={handleSubmit} noValidate>

                    <p className="text-[10px] text-gray-400 mb-5">
                      Fields marked <span className="text-red-400 font-bold">*</span> are required
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-5">

                      <div className="flex-1">
                        <label className="flex items-center gap-1 text-[9px] font-bold text-[#6096BA] uppercase tracking-[0.12em] mb-2">
                          Full Name <span className="text-red-400 text-xs">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="text" name="name" value={form.name}
                            onChange={handleChange} onBlur={handleBlur}
                            placeholder="Yash Jain"
                            className={inputClass('name')}
                          />
                          {touched.name && !errors.name && (
                            <div className="absolute right-3 top-1/2 -translate-y-1/2">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                            </div>
                          )}
                          {showError('name') && (
                            <div className="absolute right-3 top-1/2 -translate-y-1/2">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
                            </div>
                          )}
                        </div>
                        {showError('name') && (
                          <p className="text-red-400 text-[10px] mt-1.5 flex items-center gap-1">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div className="flex-1">
                        <label className="flex items-center gap-1 text-[9px] font-bold text-[#6096BA] uppercase tracking-[0.12em] mb-2">
                          Email Address <span className="text-red-400 text-xs">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="email" name="email" value={form.email}
                            onChange={handleChange} onBlur={handleBlur}
                            placeholder="yashj8029@gmail.com"
                            className={inputClass('email')}
                          />
                          {touched.email && !errors.email && (
                            <div className="absolute right-3 top-1/2 -translate-y-1/2">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                            </div>
                          )}
                          {showError('email') && (
                            <div className="absolute right-3 top-1/2 -translate-y-1/2">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
                            </div>
                          )}
                        </div>
                        {showError('email') && (
                          <p className="text-red-400 text-[10px] mt-1.5 flex items-center gap-1">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
                            {errors.email}
                          </p>
                        )}
                      </div>

                    </div>

                    <div className="mb-5">
                      <label className="flex items-center gap-2 text-[9px] font-bold text-[#6096BA] uppercase tracking-[0.12em] mb-2">
                        Subject
                        <span className="text-[9px] text-gray-400 normal-case tracking-normal font-normal">(optional)</span>
                      </label>
                      <div className="relative">
                        <select name="subject" value={form.subject} onChange={handleChange}
                          className="w-full bg-white border border-[#E2EAF0] rounded-lg px-4 py-3 text-sm text-[#274C77] outline-none focus:border-[#6096BA] transition-all appearance-none cursor-pointer">
                          <option>Career Opportunity</option>
                          <option>AI Consultation</option>
                          <option>Project Collaboration</option>
                          <option>Freelance Work</option>
                          <option>Other</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6096BA" strokeWidth="2.5">
                            <path d="M6 9l6 6 6-6"/>
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="flex items-center gap-1 text-[9px] font-bold text-[#6096BA] uppercase tracking-[0.12em] mb-2">
                        Message <span className="text-red-400 text-xs">*</span>
                        <span className="ml-auto text-gray-400 normal-case tracking-normal font-normal text-[9px]">
                          {form.message.length}/500
                        </span>
                      </label>
                      <textarea
                        name="message" value={form.message}
                        onChange={handleChange} onBlur={handleBlur}
                        placeholder="How can I help you?"
                        maxLength={500} rows={5}
                        className={`${inputClass('message')} resize-y`}
                      />
                      {showError('message') && (
                        <p className="text-red-400 text-[10px] mt-1.5 flex items-center gap-1">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* SUBMIT BUTTON — now shows a sending state */}
                    <button type="submit" disabled={sending}
                      className={`w-full font-bold text-sm py-4 rounded-xl uppercase tracking-[0.15em] transition-all duration-300 flex items-center justify-center gap-2 ${
                        submitted && !isFormValid
                          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          : sending
                          ? 'bg-[#274C77] text-white opacity-70 cursor-not-allowed'
                          : 'bg-[#274C77] text-white hover:bg-[#6096BA] cursor-pointer'
                      }`}>
                      {sending ? (
                        <>
                          <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                            <path d="M12 2a10 10 0 100 20"/>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        'Initialize Connection'
                      )}
                    </button>

                    {submitted && !isFormValid && (
                      <p className="text-red-400 text-[10px] mt-3 text-center">
                        Please fix the errors above before submitting.
                      </p>
                    )}

                    {/* NEW — shows only if EmailJS itself fails */}
                    {sendError && (
                      <p className="text-red-400 text-[10px] mt-3 text-center">
                        {sendError}
                      </p>
                    )}

                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      <footer className="bg-[#E7ECEF] border-t border-[#D1DCE8] px-6 md:px-10 lg:px-16 py-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-widest">
            © 2026 Yash Jain. Built with Precision.
          </p>
          <div className="flex items-center gap-8">
            <a href="https://www.linkedin.com/in/yash-jain-626837268/" target="_blank" rel="noreferrer" className="text-xs font-semibold text-gray-400 uppercase tracking-widest hover:text-[#274C77] transition-colors">LinkedIn</a>
            <a href="https://github.com/yashjain8878" target="_blank" rel="noreferrer" className="text-xs font-semibold text-gray-400 uppercase tracking-widest hover:text-[#274C77] transition-colors">GitHub</a>
            <a href="https://x.com/yashjain9706" target="_blank" rel="noreferrer" className="text-xs font-semibold text-gray-400 uppercase tracking-widest hover:text-[#274C77] transition-colors">X</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Contact;