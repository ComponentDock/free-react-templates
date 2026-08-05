import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Faq } from './Faq'

describe('Faq', () => {
  it('renders the heading, the three questions, and the stats row', () => {
    render(<Faq />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Frequently Asked Questions' }),
    ).toBeInTheDocument()
    for (const question of [
      'Are your Templates responsive?',
      'Does it have all the plugin as mentioned?',
      'Can i use the these theme for my client?',
    ]) {
      expect(screen.getByRole('button', { name: question })).toBeInTheDocument()
    }
    expect(screen.getByText('5962')).toBeInTheDocument()
    expect(screen.getByText('Projects Completed')).toBeInTheDocument()
    expect(screen.getByText('2394')).toBeInTheDocument()
    expect(screen.getByText('New Projects')).toBeInTheDocument()
    expect(screen.getByText('1439')).toBeInTheDocument()
    expect(screen.getByText('Tickets Submitted')).toBeInTheDocument()
    expect(screen.getByText('933')).toBeInTheDocument()
    expect(screen.getByText('Cups of Coffee')).toBeInTheDocument()
  })

  it('expands and collapses an answer when its question is activated', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    const question = screen.getByRole('button', { name: 'Are your Templates responsive?' })
    expect(question).toHaveAttribute('aria-expanded', 'false')

    await user.click(question)
    expect(question).toHaveAttribute('aria-expanded', 'true')
    expect(
      screen.getByText(/Fast, responsive, and pixel-perfect at every breakpoint/i),
    ).toBeInTheDocument()

    await user.click(question)
    expect(question).toHaveAttribute('aria-expanded', 'false')
  })
})
