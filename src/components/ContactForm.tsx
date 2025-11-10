 'use client';

import React, { useState } from 'react';
import { useLanguage, useTheme } from '@/contexts/AppContext';
import { Mail, Send, Loader2 } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const { t } = useLanguage();
  const { darkMode } = useTheme();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [apiError, setApiError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setApiError(null);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_CONTACT_API_URL;

      if (!apiUrl) {
        setApiError('API de contato não configurada. Verifique a variável NEXT_PUBLIC_CONTACT_API_URL.');
        setSubmitStatus('error');
        setIsSubmitting(false);
        return;
      }

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      let result: any = {};
      try {
        result = await response.json();
      } catch (parseErr) {
        const text = await response.text();
        setApiError(
          'Erro inesperado: resposta da API em formato inválido. Contate o suporte.\n\n' +
          'Status: ' + response.status + '\n' +
          'Resposta recebida: ' + text.slice(0, 200) // mostra o início da resposta HTML, se for erro
        );
        setSubmitStatus('error');
        setIsSubmitting(false);
        return;
      }

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setApiError(result.error || 'Erro inesperado ao enviar contato.');
        setSubmitStatus('error');
      }
    } catch (error) {
      setApiError('Erro ao conectar à API. Tente novamente.');
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = `w-full px-4 py-3 rounded-lg border transition-colors duration-300 focus:outline-none focus:ring-2 ${
    darkMode 
      ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-400 focus:border-blue-400' 
      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500'
  }`;

  const labelClasses = `block text-sm font-medium mb-2 transition-colors duration-300 ${
    darkMode ? 'text-gray-300' : 'text-gray-700'
  }`;

  return (
    <div className={`rounded-xl shadow-xl p-8 transition-colors duration-300 ${
      darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
    }`}>
      <div className="text-center mb-8">
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
          darkMode ? 'bg-blue-500' : 'bg-blue-600'
        }`}>
          <Mail className="w-8 h-8 text-white" />
        </div>
        <h3 className={`text-2xl font-bold transition-colors duration-300 ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          {t.contact.form.title}
        </h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className={labelClasses}>
              {t.contact.form.name}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t.contact.form.namePlaceholder}
              required
              className={inputClasses}
            />
          </div>
          <div>
            <label htmlFor="email" className={labelClasses}>
              {t.contact.form.email}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t.contact.form.emailPlaceholder}
              required
              className={inputClasses}
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className={labelClasses}>
            {t.contact.form.subject}
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder={t.contact.form.subjectPlaceholder}
            required
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="message" className={labelClasses}>
            {t.contact.form.message}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={t.contact.form.messagePlaceholder}
            required
            rows={6}
            className={inputClasses}
          />
        </div>

        {submitStatus === 'success' && (
          <div className="p-4 rounded-lg bg-green-100 border border-green-300 text-green-700">
            {t.contact.form.success}
          </div>
        )}

        {(submitStatus === 'error' && apiError) && (
          <div className="p-4 rounded-lg bg-red-100 border border-red-300 text-red-700 whitespace-pre-line">
            {apiError}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 ${
            isSubmitting
              ? 'bg-gray-400 cursor-not-allowed'
              : darkMode
              ? 'bg-blue-500 hover:bg-blue-600 focus:ring-blue-400'
              : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500'
          } focus:outline-none focus:ring-2 focus:ring-offset-2`}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              {t.contact.form.sending}
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              {t.contact.form.send}
            </>
          )}
        </button>
      </form>
    </div>
  );
}
