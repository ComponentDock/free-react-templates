import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SplitHero } from './SplitHero'

describe('SplitHero', () => {
  it('renders heading and subtext', () => {
    render(<SplitHero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Coming Soon')
    expect(screen.getByText(/working hard/)).toBeInTheDocument()
  })

  it('renders countdown timer', () => {
    render(<SplitHero />)
    expect(screen.getByText('Days')).toBeInTheDocument()
    expect(screen.getByText('Hours')).toBeInTheDocument()
    expect(screen.getByText('Minutes')).toBeInTheDocument()
    expect(screen.getByText('Seconds')).toBeInTheDocument()
  })

  it('renders email input and submit button', () => {
    render(<SplitHero />)
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /notify me/i })).toBeInTheDocument()
  })

  it('shows success message after valid submission', async () => {
    const user = userEvent.setup()
    render(<SplitHero />)
    await user.type(screen.getByPlaceholderText('Enter your email'), 'test@example.com')
    await user.click(screen.getByRole('button', { name: /notify me/i }))
    expect(screen.getByRole('status')).toHaveTextContent('Thank you')
    expect(screen.queryByPlaceholderText('Enter your email')).not.toBeInTheDocument()
  })
})
