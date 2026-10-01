import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Faq } from './Faq'

describe('Faq', () => {
  it('renders the heading and all five questions collapsed', () => {
    render(<Faq />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Frequently Asked Questions' }),
    ).toBeInTheDocument()
    const toggles = screen.getAllByRole('button', { expanded: false })
    expect(toggles).toHaveLength(5)
    expect(screen.queryByText(/We're always looking for interesting guests/)).toBeNull()
  })

  it('expands an answer on click and collapses it again', async () => {
    const user = userEvent.setup()
    render(<Faq />)
    const first = screen.getAllByRole('button')[0] as HTMLElement
    await user.click(first)
    expect(first).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(/We're always looking for interesting guests/)).toBeInTheDocument()

    await user.click(first)
    expect(first).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText(/We're always looking for interesting guests/)).toBeNull()
  })

  it('opening one question collapses the previously open one', async () => {
    const user = userEvent.setup()
    render(<Faq />)
    const buttons = screen.getAllByRole('button') as HTMLElement[]
    await user.click(buttons[0]!)
    await user.click(buttons[1]!)
    expect(buttons[0]!).toHaveAttribute('aria-expanded', 'false')
    expect(buttons[1]!).toHaveAttribute('aria-expanded', 'true')
    expect(screen.queryByText(/We're always looking for interesting guests/)).toBeNull()
    expect(screen.getByText(/New episodes land every Tuesday/)).toBeInTheDocument()
  })

  it('answers expose aria-controls pointing at their panel', async () => {
    const user = userEvent.setup()
    render(<Faq />)
    const buttons = screen.getAllByRole('button') as HTMLElement[]
    await user.click(buttons[2]!)
    expect(buttons[2]!).toHaveAttribute('aria-controls', 'faq-answer-2')
    expect(document.getElementById('faq-answer-2')).not.toBeNull()
  })
})
