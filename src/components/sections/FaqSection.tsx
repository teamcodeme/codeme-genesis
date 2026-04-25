import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do I need experience to join?",
    a: "No. Beginners and inexperienced members can apply if they are serious, consistent, and willing to learn.",
  },
  {
    q: "Is this a full-time paid job?",
    a: "Not at the beginning. Most roles start as volunteer, learning-based, or contract/project-based opportunities.",
  },
  {
    q: "How do payments work?",
    a: "Payments depend on project profit, contribution level, performance, and your role in the project.",
  },
  {
    q: "Can I get promoted?",
    a: "Yes. Members who perform well, communicate properly, and deliver quality work can be promoted to higher responsibility roles.",
  },
  {
    q: "Can this become a monthly salary role?",
    a: "Yes, in the future. Once Team CodeMe secures larger long-term projects such as government or enterprise projects, selected strong performers may receive monthly salary-based roles.",
  },
  {
    q: "Can non-tech people join?",
    a: "Yes. Non-tech people can support areas like documentation, QA testing, marketing, content, project coordination, and slowly learn technical skills.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="relative py-24">
      <div className="mx-auto max-w-3xl px-5">
        <SectionHeader
          eyebrow="FAQ"
          title={<>Honest answers to <span className="text-gradient-primary">common questions</span></>}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-12 rounded-2xl glass-strong p-2 md:p-4"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-border/50">
                <AccordionTrigger className="px-4 text-left font-display text-base font-semibold hover:text-[var(--neon-cyan)] hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="px-4 text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
