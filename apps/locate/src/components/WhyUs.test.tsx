import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { WhyUs } from './WhyUs'

describe('WhyUs', () => {
  it('renders the section heading', () => {
    render(<WhyUs />)
    expect(screen.getByRole('heading', { level: 2, name: 'Why Us' })).toBeInTheDocument()
  })

  it('renders 4 FAQ questions', () => {
    render(<WhyUs />)
    expect(screen.getByText('How to list my item?')).toBeInTheDocument()
    expect(screen.getByText('Is this available in my country?')).toBeInTheDocument()
    expect(screen.getByText('Is it free?')).toBeInTheDocument()
    expect(screen.getByText('How does the system work?')).toBeInTheDocument()
  })

  it('expands FAQ answer on click', async () => {
    const user = userEvent.setup()
    render(<WhyUs />)
    const btn = screen.getByText('How to list my item?')
    await user.click(btn)
    expect(screen.getByText(/Simply create an account/)).toBeInTheDocument()
  })

  it('collapses FAQ answer on second click', async () => {
    const user = userEvent.setup()
    render(<WhyUs />)
    const btn = screen.getByText('How to list my item?')
    await user.click(btn)
    expect(screen.getByText(/Simply create an account/)).toBeInTheDocument()
    await user.click(btn)
    expect(screen.queryByText(/Simply create an account/)).not.toBeInTheDocument()
  })

  it('sets aria-expanded correctly', async () => {
    const user = userEvent.setup()
    render(<WhyUs />)
    const btn = screen.getByText('How to list my item?')
    expect(btn.closest('button')).toHaveAttribute('aria-expanded', 'false')
    await user.click(btn)
    expect(btn.closest('button')).toHaveAttribute('aria-expanded', 'true')
  })
})
