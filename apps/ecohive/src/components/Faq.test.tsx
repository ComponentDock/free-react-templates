import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Faq } from './Faq'

describe('Faq', () => {
  it('renders the title and the four questions collapsed', () => {
    render(<Faq />)
    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe('Frequently ask questions')
    expect(screen.getAllByRole('button')).toHaveLength(4)
    for (const question of [
      "Why can't people connect to the web server on my PC?",
      'What domain name should I choose for my site?',
      'How can I make my website work without www. in front?',
      'Why does Internet Information Server want a password?',
    ]) {
      expect(screen.getByRole('button', { name: question })).toHaveAttribute(
        'aria-expanded',
        'false',
      )
    }
    expect(screen.queryByText(/A home connection usually blocks/)).not.toBeInTheDocument()
  })

  it('expands an answer on click, collapses it on a second click and keeps one panel at a time', async () => {
    const user = userEvent.setup()
    render(<Faq />)
    const first = screen.getByRole('button', { name: /Why can't people connect/ })
    const second = screen.getByRole('button', { name: /What domain name should I choose/ })

    await user.click(first)
    expect(first).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(/A home connection usually blocks/)).toBeInTheDocument()

    await user.click(second)
    expect(second).toHaveAttribute('aria-expanded', 'true')
    expect(first).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText(/A home connection usually blocks/)).not.toBeInTheDocument()
    expect(screen.getByText(/Pick something short that is easy to spell/)).toBeInTheDocument()

    await user.click(second)
    expect(second).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText(/Pick something short that is easy to spell/)).not.toBeInTheDocument()
  })

  it('also toggles from the keyboard', async () => {
    const user = userEvent.setup()
    render(<Faq />)
    const third = screen.getByRole('button', { name: /How can I make my website work/ })

    third.focus()
    await user.keyboard('{Enter}')
    expect(third).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(/Point the bare domain at your site/)).toBeInTheDocument()
  })
})
