"use client"
import React, { useState, ChangeEvent, FormEvent } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { poppins, forum } from "@/app/components/fonts";

interface FormState {
  name: string;
  email: string;
  message: string;
}

export default function Page() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    alert("This is just a static frontend — no messages will be sent.");
  }

  return (
    <main className="min-h-screen bg-black text-white antialiased flex items-center justify-center p-6">
      <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Info */}
        <div className="flex flex-col justify-center gap-6">
          <h1 className={`text-4xl font-semibold tracking-tight ${poppins.className}`}>Contact Us</h1>
          <p className={`text-sm leading-relaxed max-w-md ${forum.className}`}>Simple, direct — get in touch for classes, auditions, workshops or bespoke coaching. Prefer phone? Use the number below. Prefer email? Use the form.</p>

          <div className={`mt-4 space-y-4 ${forum.className}`}>
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5" aria-hidden />
              <div>
                <div className="text-xs uppercase tracking-wide">Location</div>
                <div className="text-sm">Unit 3, Blackbox Studios, 12 Backstage Lane, Mumbai</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5" aria-hidden />
              <div>
                <div className="text-xs uppercase tracking-wide">Phone</div>
                <a href="tel:+912200000000" className="text-sm underline">+91 22 0000 0000</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5" aria-hidden />
              <div>
                <div className="text-xs uppercase tracking-wide">Email</div>
                <a href="mailto:hello@stagecraftacademy.com" className="text-sm underline">hello@stagecraftacademy.com</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-5 h-5" aria-hidden />
              <div>
                <div className="text-xs uppercase tracking-wide">Hours</div>
                <div className="text-sm">Mon — Sat: 9:00 AM — 7:00 PM</div>
              </div>
            </div>
          </div>

          <small className="text-xs opacity-60">We aim to reply within 48 hours. For urgent matters call the number above.</small>
        </div>

        {/* Right: Form */}
        <div className="flex items-start">
          <form onSubmit={handleSubmit} className="w-full bg-black border border-white/20 p-6 rounded-2xl shadow-sm">
            <label className="block text-xs uppercase tracking-wide mb-2" htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full mb-4 px-3 py-2 rounded-lg border border-white/20 bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20"
              placeholder="Your full name"
            />

            <label className="block text-xs uppercase tracking-wide mb-2" htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full mb-4 px-3 py-2 rounded-lg border border-white/20 bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20"
              placeholder="you@domain.com"
              type="email"
            />

            <label className="block text-xs uppercase tracking-wide mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={6}
              className="w-full mb-4 px-3 py-2 rounded-lg border border-white/20 bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 resize-y"
              placeholder="How can we help? Tell us a little about your project or question."
            />

            <div className="flex items-center justify-between gap-4">
              <motion.button
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="inline-flex items-center gap-3 px-5 py-2 rounded-lg border border-white bg-white text-black font-medium hover:bg-gray-200 cursor-pointer"
              >
                Send message
              </motion.button>

              <div className="text-sm opacity-70">OR <a href="mailto:hello@stagecraftacademy.com" className="underline">email us directly</a></div>
            </div>

            <hr className="my-6 border-white/10" />

            <div className="text-xs opacity-70">
              By contacting Stage Craft Academy you agree to our <a className="underline" href="#">privacy policy</a>.
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}