import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Faq } from './Faq'

describe('Faq', () => {
  it('shows the eyebrow, heading, and five questions with the first expanded', () => {
    render(<Faq />)

    expect(screen.getByText('Got Questions?')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Frequently Asked Questions' }),
    ).toBeInTheDocument()

    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(5)
    expect(buttons[0]!).toHaveAttribute('aria-expanded', 'true')
    expect(buttons[1]!).toHaveAttribute('aria-expanded', 'false')

    expect(screen.getByText(/We work with small and mid-sized businesses/)).toBeInTheDocument()
  })

  it('collapses the first item and expands the clicked one', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    const buttons = screen.getAllByRole('button')

    await user.click(buttons[1]!)
    expect(buttons[0]!).toHaveAttribute('aria-expanded', 'false')
    expect(buttons[1]!).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(/Most engagements run 8 to 16 weeks/)).toBeInTheDocument()
    expect(
      screen.queryByText(/We work with small and mid-sized businesses/),
    ).not.toBeInTheDocument()
  })

  it('collapses the open item when clicked again', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    const first = screen.getAllByRole('button')[0]!
    await user.click(first)
    expect(first).toHaveAttribute('aria-expanded', 'false')
    expect(
      screen.queryByText(/We work with small and mid-sized businesses/),
    ).not.toBeInTheDocument()
  })
})
