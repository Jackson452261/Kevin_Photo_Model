import React, { useRef, useState } from "react";
import { Facebook, Instagram, Twitter, Youtube, MapPin, Mail, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Footer: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    if (!formRef.current) {
      setErrorMsg("表單尚未準備好");
      setLoading(false);
      return;
    }

    // 簡單必填驗證
    const form = formRef.current;
    if (!form.from_name.value.trim() || !form.from_email.value.trim() || !form.message.value.trim()) {
      setErrorMsg("請填寫所有必填欄位");
      setLoading(false);
      return;
    }

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setSuccessMsg("已成功送出！我們會盡快回覆您。");
        formRef.current?.reset();
      })
      .catch((err) => {
        console.error(err);
        setErrorMsg("送出失敗，請稍後再試。");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <footer
      className="text-white bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dtbj43yha/image/upload/v1753798709/mountain_jdi9k6.jpg')",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* 公司資訊 */}
          <div>
            <h3 className="text-4xl font-bold mb-4 text-slate-700 ">Kevin攝影</h3>
            <p className="text-slate-900 mb-6">
              
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-700   hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-slate-700 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-slate-700 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-slate-700   hover:text-white transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          {/* 快速連結  
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Destinations</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Travel Guides</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-slate-700 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          */}
          {/* 類別 */}
          <div>
          <h2 className=" font-semibold  text-slate-900  text-4xl mb-4">項目</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-900 hover:text-white transition-colors">Adventure Travel</a></li>
              <li><a href="#" className="text-slate-900 hover:text-white transition-colors">Cultural Experiences</a></li>
              <li><a href="#" className="text-slate-900 hover:text-white transition-colors">Food & Cuisine</a></li>
              <li><a href="#" className="text-slate-900 hover:text-white transition-colors">Nature & Wildlife</a></li>
              <li><a href="#" className="text-slate-900 hover:text-white transition-colors">City Breaks</a></li>
            </ul>
          </div>

          {/* 聯絡資訊 */}
          <div>
            <h2 className=" font-semibold  text-slate-900  text-4xl mb-4">聯絡資訊</h2>
            <div className="space-y-3">
              <div className="flex items-center"><MapPin size={16} className="mr-2 text-cyan-900" /> <span className="text-slate-900">New York, NY 10001</span></div>
              <div className="flex items-center"><Mail size={16} className="mr-2 text-cyan-900" /> <span className="text-slate-900">hello@wanderlust.com</span></div>
              <div className="flex items-center"><Phone size={16} className="mr-2 text-cyan-900" /> <span className="text-slate-900">+1 (555) 123-4567</span></div>
            </div>
          </div>

          {/* 聯絡表單 */}
          <div className="lg:col-span-2">
          <h2 className=" font-semibold  text-slate-900  text-4xl mb-4">聯絡我</h2>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" name="from_name" placeholder="Your Name" required className="bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white" />
                <input type="email" name="from_email" placeholder="Your Email" required className="bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white" />
              </div>
              <input type="text" name="from_phone" placeholder="Your Phone (optional)" className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white" />
              <textarea name="message" placeholder="Your Message" required rows={4} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white resize-none"></textarea>
              
              {errorMsg && <p className="text-red-500">{errorMsg}</p>}
              {successMsg && <p className="text-green-500">{successMsg}</p>}

              <button type="submit" disabled={loading} className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold">
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>

        {/* 底部 */}
        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">© 2025</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-slate-400 hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-white text-sm">Terms of Service</a>
            <a href="#" className="text-slate-400 hover:text-white text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
