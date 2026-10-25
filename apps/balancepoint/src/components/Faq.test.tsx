import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { FAQS, FAQ_COPY } from '../content'
import { Faq } from './Faq'

describe('Faq', () => {
  it('opens the first answer on load and leaves the rest shut', () => {
    render(<Faq />)
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(5)
    expect(buttons[0]).toHaveAttribute('aria-expanded', 'true')
    expect(buttons[1]).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getByText(FAQS[0]!.answer)).toBeInTheDocument()
    expect(screen.queryByText(FAQS[1]!.answer)).toBeNull()
  })

  it('points every control at its own panel', () => {
    render(<Faq />)
    const buttons = screen.getAllByRole('button')
    buttons.forEach((button, index) => {
      expect(button).toHaveAttribute('aria-controls', `faq-answer-${index}`)
    })
    expect(document.getElementById('faq-answer-0')).not.toBeNull()
  })

  it('makes every answer reachable by clicking through the five', () => {
    render(<Faq />)
    const buttons = screen.getAllByRole('button')
    for (let index = 1; index < FAQS.length; index += 1) {
      fireEvent.click(buttons[index]!)
      expect(screen.getByText(FAQS[index]!.answer)).toBeInTheDocument()
      expect(screen.queryByText(FAQS[0]!.answer)).toBeNull()
      expect(buttons[index]).toHaveAttribute('aria-expanded', 'true')
    }
  })

  it('closes an open row when its own question is clicked again', () => {
    render(<Faq />)
    const first = screen.getAllByRole('button')[0]!
    fireEvent.click(first)
    expect(first).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText(FAQS[0]!.answer)).toBeNull()
  })

  it('rotates the chevron on the open row only', () => {
    render(<Faq />)
    const open = screen.getAllByRole('button')[0]!
    expect(open.querySelector('svg')?.getAttribute('class')).toContain('rotate-180')
    const shut = screen.getAllByRole('button')[1]!
    expect(shut.querySelector('svg')?.getAttribute('class')).not.toContain('rotate-180')
  })

  it('carries the pill, the heading and the lede', () => {
    render(<Faq />)
    expect(screen.getByText(FAQ_COPY.pill)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(FAQ_COPY.heading)
    expect(screen.getByText(FAQ_COPY.lede)).toBeInTheDocument()
  })
})
