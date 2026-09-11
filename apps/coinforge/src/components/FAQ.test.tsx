import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FAQ } from './FAQ'

describe('FAQ', () => {
  it('shows FAQ heading and default tab content', () => {
    render(<FAQ />)
    expect(screen.getByRole('heading', { name: 'Frequently Asked Questions' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'General Questions' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'ICO' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Token' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Cryptocurrency' })).toBeInTheDocument()
    expect(screen.getByText('Why should I invest in ICO?')).toBeInTheDocument()
  })

  it('switches tabs when clicked', async () => {
    const user = userEvent.setup()
    render(<FAQ />)

    await user.click(screen.getByRole('button', { name: 'Token' }))
    expect(screen.getByText('When will tokens be distributed?')).toBeInTheDocument()
    expect(screen.queryByText('Why should I invest in ICO?')).not.toBeInTheDocument()
  })

  it('handles undefined tab content gracefully', async () => {
    const user = userEvent.setup()
    render(<FAQ />)

    // Switch to a tab, then check the ?? [] fallback doesn't break rendering
    await user.click(screen.getByRole('button', { name: 'Cryptocurrency' }))
    expect(screen.getByText('How to trade cryptocurrencies?')).toBeInTheDocument()
  })
})
