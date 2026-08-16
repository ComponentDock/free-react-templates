import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Faq } from './Faq'
import { faqs } from '../data'

describe('Faq', () => {
  it('renders the kicker, heading, and paragraph', () => {
    render(<Faq />)
    expect(screen.getByText(faqs.kicker)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: faqs.heading })).toBeInTheDocument()
    expect(screen.getAllByText(faqs.paragraph).length).toBeGreaterThan(0)
  })

  it('opens the first question by default', () => {
    render(<Faq />)
    const first = faqs.items[0]
    const buttons = screen.getAllByRole('button')
    expect(buttons[0]!).toHaveAttribute('aria-expanded', 'true')
    const firstPanel = document.getElementById('faq-panel-0')
    expect(firstPanel).toHaveTextContent(first.answer)
  })

  it('expands a question and collapses the others', async () => {
    const user = userEvent.setup()
    render(<Faq />)
    const second = faqs.items[1]
    const buttons = screen.getAllByRole('button')
    await user.click(buttons[1]!)
    expect(buttons[0]!).toHaveAttribute('aria-expanded', 'false')
    expect(buttons[1]!).toHaveAttribute('aria-expanded', 'true')
    const secondPanel = document.getElementById('faq-panel-1')
    expect(secondPanel).toHaveTextContent(second.answer)
  })

  it('collapses an open question when clicked again', async () => {
    const user = userEvent.setup()
    render(<Faq />)
    const buttons = screen.getAllByRole('button')
    await user.click(buttons[0]!)
    expect(buttons[0]!).toHaveAttribute('aria-expanded', 'false')
  })
})
