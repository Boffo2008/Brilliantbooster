"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Ange minst 2 tecken"),
  company: z.string().optional(),
  email: z.string().email("Ange en giltig e-postadress"),
  phone: z.string().optional(),
  budget: z.string().min(1, "Välj en budget"),
  message: z.string().min(10, "Meddelandet måste vara minst 10 tecken"),
});

type FormData = z.infer<typeof schema>;

const budgetOptions = [
  "Under 10 000 kr/mån",
  "10 000 – 25 000 kr/mån",
  "25 000 – 50 000 kr/mån",
  "50 000 – 100 000 kr/mån",
  "Över 100 000 kr/mån",
  "Vet ej ännu",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (_data: FormData) => {
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-6 h-full">
        <div className="w-16 h-16 bg-blue-500/15 rounded-full flex items-center justify-center mb-5">
          <CheckCircle className="w-8 h-8 text-blue-400" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">Tack för ditt meddelande!</h3>
        <p className="text-zinc-400 max-w-sm leading-relaxed">
          Vi återkommer till dig inom 24 timmar med information om hur vi kan
          hjälpa dig att växa digitalt.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-1.5">
            Namn <span className="text-blue-400">*</span>
          </label>
          <input
            {...register("name")}
            placeholder="Anna Andersson"
            className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-1.5">
            Företag
          </label>
          <input
            {...register("company")}
            placeholder="Ditt AB"
            className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-1.5">
            E-post <span className="text-blue-400">*</span>
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="anna@foretag.se"
            className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-1.5">
            Telefon
          </label>
          <input
            {...register("phone")}
            type="tel"
            placeholder="070 000 00 00"
            className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-zinc-300 mb-1.5">
          Månatlig budget <span className="text-blue-400">*</span>
        </label>
        <select
          {...register("budget")}
          defaultValue=""
          className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm appearance-none"
        >
          <option value="" disabled className="text-zinc-500">
            Välj budget...
          </option>
          {budgetOptions.map((opt) => (
            <option key={opt} value={opt} className="bg-zinc-800">
              {opt}
            </option>
          ))}
        </select>
        {errors.budget && (
          <p className="mt-1 text-xs text-red-400">{errors.budget.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-zinc-300 mb-1.5">
          Meddelande <span className="text-blue-400">*</span>
        </label>
        <textarea
          {...register("message")}
          rows={5}
          placeholder="Berätta om ditt företag och vad du vill uppnå..."
          className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm resize-none"
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-blue-500 hover:bg-blue-400 disabled:bg-blue-500/50 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 text-base"
      >
        {isSubmitting ? (
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <>
            <Send className="w-4 h-4" />
            Skicka meddelande
          </>
        )}
      </button>
    </form>
  );
}
