import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Faq } from './Faq'
import { FAQS } from '../content'

function row(question: string): HTMLButtonElement {
  return screen.getByRole('button', {
    name: new RegExp(question.slice(0, 24)),
  }) as HTMLButtonElement
}

describe('Faq', () => {
  it('renders five collapsed rows with the first one closed', () => {
    render(<Faq />)

    const rows = screen.getAllByRole('button')
    expect(rows).toHaveLength(5)
    for (const button of rows) {
      expect(button).toHaveAttribute('aria-expanded', 'false')
    }
    expect(screen.queryByText(FAQS[0]!.answer)).toBeNull()
  })

  it('opens a row and rotates its disc into an x', () => {
    render(<Faq />)

    fireEvent.click(row('Can I make a post public?'))

    expect(row('Can I make a post public?')).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(FAQS[0]!.answer)).toBeInTheDocument()
    const icon = row('Can I make a post public?').querySelector('svg')
    expect(icon?.getAttribute('class')).toContain('rotate-45')
  })

  it('closes the previous row when another one opens', () => {
    render(<Faq />)

    fireEvent.click(row('Can I make a post public?'))
    fireEvent.click(row('How do you make money without advertising?'))

    expect(row('Can I make a post public?')).toHaveAttribute('aria-expanded', 'false')
    expect(row('How do you make money without advertising?')).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(screen.queryByText(FAQS[0]!.answer)).toBeNull()
    expect(screen.getByText(FAQS[1]!.answer)).toBeInTheDocument()
  })

  it('collapses the open row when it is activated again', () => {
    render(<Faq />)

    fireEvent.click(row('Can I make a post public?'))
    fireEvent.click(row('Can I make a post public?'))

    expect(row('Can I make a post public?')).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText(FAQS[0]!.answer)).toBeNull()
  })
})
