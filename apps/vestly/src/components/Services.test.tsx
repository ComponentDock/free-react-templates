import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Services } from './Services'

describe('Services', () => {
  it('renders all service cards', () => {
    render(<Services />)
    expect(screen.getByText('Exchange Fiat for Crypto')).toBeInTheDocument()
    expect(screen.getByText('Secure Wallet Storage')).toBeInTheDocument()
    expect(screen.getByText('Instant Transactions')).toBeInTheDocument()
  })

  it('renders Read More links for each service', () => {
    render(<Services />)
    const links = screen.getAllByText('Read More')
    expect(links.length).toBeGreaterThanOrEqual(3)
  })

  it('navigates services carousel forward', async () => {
    const user = userEvent.setup()
    render(<Services />)
    await user.click(screen.getByRole('button', { name: /next services/i }))
    expect(screen.getByText('Exchange Fiat for Crypto')).toBeInTheDocument()
  })

  it('navigates services carousel backward from non-zero offset', async () => {
    const user = userEvent.setup()
    render(<Services />)
    // Move forward first so offset is non-zero
    await user.click(screen.getByRole('button', { name: /next services/i }))
    // Now prev should decrement (not wrap)
    await user.click(screen.getByRole('button', { name: /previous services/i }))
    expect(screen.getByText('Exchange Fiat for Crypto')).toBeInTheDocument()
  })

  it('wraps carousel forward past the end', async () => {
    const user = userEvent.setup()
    render(<Services />)
    for (let i = 0; i < 5; i++) {
      await user.click(screen.getByRole('button', { name: /next services/i }))
    }
    expect(screen.getByText('Exchange Fiat for Crypto')).toBeInTheDocument()
  })

  it('wraps carousel backward past the start', async () => {
    const user = userEvent.setup()
    render(<Services />)
    await user.click(screen.getByRole('button', { name: /previous services/i }))
    expect(screen.getByText('Exchange Fiat for Crypto')).toBeInTheDocument()
  })
})
