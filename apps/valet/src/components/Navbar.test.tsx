import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders brand and all navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Virtual Assistant')).toBeInTheDocument()
    const links = ['Home', 'About', 'Services', 'How It Works', 'Pricing Plans', 'Blog', 'Contact']
    for (const link of links) {
      expect(screen.getByText(link)).toBeInTheDocument()
    }
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const btn = screen.getByRole('button', { name: /toggle navigation/i })
    expect(btn).toHaveAttribute('aria-expanded', 'false')
    await user.click(btn)
    expect(btn).toHaveAttribute('aria-expanded', 'true')
  })

  it('closes mobile menu on second click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const btn = screen.getByRole('button', { name: /toggle navigation/i })
    await user.click(btn)
    expect(btn).toHaveAttribute('aria-expanded', 'true')
    await user.click(btn)
    expect(btn).toHaveAttribute('aria-expanded', 'false')
  })
})
