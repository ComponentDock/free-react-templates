import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
  it('displays brand logo text', () => {
    render(<Sidebar />)
    expect(screen.getByText('Plinth.')).toBeInTheDocument()
  })

  it('brand text is bold and dark', () => {
    render(<Sidebar />)
    const brand = screen.getByText('Plinth.')
    expect(brand).toHaveClass('font-bold')
  })

  it('displays hamburger menu icon', () => {
    render(<Sidebar />)
    expect(screen.getByRole('button', { name: /toggle menu/i })).toBeInTheDocument()
  })

  it('hamburger toggles mobile navigation', async () => {
    const user = userEvent.setup()
    render(<Sidebar />)
    const toggle = screen.getByRole('button', { name: /toggle menu/i })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('renders navigation links when open', async () => {
    const user = userEvent.setup()
    render(<Sidebar />)
    const toggle = screen.getByRole('button', { name: /toggle menu/i })
    await user.click(toggle)
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /portfolio/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument()
  })
})
