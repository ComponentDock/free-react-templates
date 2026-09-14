import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the Grain logo', () => {
    render(<Navbar />)
    expect(screen.getByText('Grain')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /work/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument()
  })

  it('has a menu toggle button', () => {
    render(<Navbar />)
    const button = screen.getByRole('button', { name: /open navigation menu/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  it('opens side navigation on menu click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const button = screen.getByRole('button', { name: /open navigation menu/i })
    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('navigation', { name: /main navigation/i })).toHaveClass(
      'translate-x-0',
    )
  })

  it('closes side navigation when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const button = screen.getByRole('button', { name: /open navigation menu/i })
    await user.click(button)
    const nav = screen.getByRole('navigation', { name: /main navigation/i })
    const links = Array.from(nav.querySelectorAll('a'))
    const workLink = links[1]
    expect(workLink).toBeDefined()
    await user.click(workLink!)
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes side navigation when overlay is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const button = screen.getByRole('button', { name: /open navigation menu/i })
    await user.click(button)
    const overlay = screen.getByRole('presentation')
    await user.click(overlay)
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })
})
