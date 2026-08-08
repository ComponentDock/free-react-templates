import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Faq } from './Faq'

describe('Faq', () => {
  it('shows the heading and at least three question buttons', () => {
    render(<Faq />)

    expect(screen.getByRole('heading', { name: 'Frequently Asked Questions' })).toBeInTheDocument()

    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBeGreaterThanOrEqual(3)
  })

  it('expands an answer when its question is pressed', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    const first = screen.getAllByRole('button')[0]!
    expect(first).toHaveAttribute('aria-expanded', 'false')
    const question = first.textContent ?? ''

    await user.click(first)
    expect(first).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(question).closest('h3')!.parentElement!.textContent).toContain('Yes.')
  })

  it('collapses the answer when the open question is pressed again', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    const first = screen.getAllByRole('button')[0]!
    await user.click(first)
    expect(first).toHaveAttribute('aria-expanded', 'true')

    await user.click(first)
    expect(first).toHaveAttribute('aria-expanded', 'false')
  })
})
