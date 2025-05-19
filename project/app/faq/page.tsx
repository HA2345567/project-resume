"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function FAQPage() {
  const faqs = [
    {
      question: "How does ResumeRush automate job applications?",
      answer: "ResumeRush monitors job boards in real-time and automatically customizes your resume based on the job description. It then submits your application and can optionally send a personalized message to the recruiter."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we take security seriously. All your data is encrypted, and we never store sensitive information like passwords. We only use your information to automate applications and improve your job search experience."
    },
    {
      question: "What happens if I reach my daily application limit?",
      answer: "When you reach your plan's daily limit, automation will pause until the next day. You'll receive a notification, and you can always upgrade your plan to increase your daily limit."
    },
    {
      question: "Can I customize the automated messages sent to recruiters?",
      answer: "Yes! You can fully customize the message template used for recruiter outreach. You can use variables like [Company Name] and [Job Title] that will be automatically filled in."
    },
    {
      question: "How do I pause the automation?",
      answer: "You can easily toggle automation on/off from your dashboard at any time. This gives you full control over when applications are sent."
    },
    {
      question: "What file formats are supported for resume upload?",
      answer: "We currently support PDF and DOCX formats for resume uploads. These formats allow us to properly parse and customize your resume for each application."
    },
    {
      question: "Can I use ResumeRush for multiple job titles?",
      answer: "Yes! You can set up multiple job search profiles with different titles, skills, and preferences. This allows you to target different types of roles simultaneously."
    },
    {
      question: "How do I track my applications?",
      answer: "Your dashboard shows all applications in real-time, including status updates, recruiter responses, and interview invitations. You can also export this data for your records."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about ResumeRush
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Still have questions?{" "}
              <a href="/contact" className="text-primary hover:underline">
                Contact our support team
              </a>
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}