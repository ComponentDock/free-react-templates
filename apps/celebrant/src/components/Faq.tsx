import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { FAQS, FAQ_TITLE, SECTION_IDS } from '../lib/site'
import {
  bandClass,
  containerClass,
  faqBodyClass,
  faqButtonClass,
  faqCardClass,
  faqChevronClass,
  faqChevronTurnClass,
  faqHeadingClass,
  faqPanelClass,
} from '../lib/styles'
import { SectionTitle } from './SectionTitle'

const FAQ_LABEL = 'Frequently asked questions'

/**
 * The seven question rows. The design opens the first one on load and lets a second one take its
 * place; the rows are real buttons, so a question folds and unfolds from the keyboard, and a folded
 * panel is `hidden` rather than merely moved away.
 */
export function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id={SECTION_IDS.faq} aria-label={FAQ_LABEL} className={bandClass}>
      <div className={containerClass}>
        <SectionTitle roomy>{FAQ_TITLE}</SectionTitle>

        <div>
          {FAQS.map((faq, position) => {
            const isOpen = position === openIndex
            const buttonId = `celebrant-question-${position}`
            const panelId = `celebrant-answer-${position}`

            return (
              <div key={faq.question} className={faqCardClass}>
                <h5 className={faqHeadingClass}>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className={faqButtonClass(isOpen)}
                    onClick={() => {
                      setOpenIndex(isOpen ? -1 : position)
                    }}
                  >
                    {faq.question}
                    <ChevronDown
                      aria-hidden="true"
                      className={`${faqChevronClass} ${faqChevronTurnClass(isOpen)}`}
                    />
                  </button>
                </h5>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className={faqPanelClass}
                >
                  <p className={faqBodyClass}>{faq.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
