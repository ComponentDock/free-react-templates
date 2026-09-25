import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo text', () => {
    render(<Navbar />)
    expect(screen.getByText('Tools Kit.')).toBeInTheDocument()
  })

  it('renders the COMPONENTS dropdown trigger', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /components/i })).toBeInTheDocument()
  })

  it('renders the DOWNLOAD link', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /download/i })).toBeInTheDocument()
  })

  it('renders social icon links', () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation')
    const links = nav.querySelectorAll('a[href]')
    const socialLinks = Array.from(links).filter((a) =>
      a.getAttribute('aria-label')?.match(/facebook|twitter|instagram/i),
    )
    expect(socialLinks.length).toBe(3)
  })

  it('toggles the components dropdown on click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const trigger = screen.getByRole('button', { name: /components/i })
    expect(screen.queryByRole('list')).not.toBeInTheDocument()
    await user.click(trigger)
    expect(screen.getByRole('list')).toBeInTheDocument()
    await user.click(trigger)
    expect(screen.queryByRole('list')).not.toBeInTheDocument()
  })

  it('shows component categories in dropdown', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /components/i }))
    expect(screen.getByRole('menuitem', { name: /buttons/i })).toBeInTheDocument()
    expect(screen.getByRole('menuitem', { name: /forms/i })).toBeInTheDocument()
    expect(screen.getByRole('menuitem', { name: /cards/i })).toBeInTheDocument()
    expect(screen.getByRole('menuitem', { name: /alerts/i })).toBeInTheDocument()
  })

  it('closes dropdown when clicking outside', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const trigger = screen.getByRole('button', { name: /components/i })
    await user.click(trigger)
    expect(screen.getByRole('list')).toBeInTheDocument()
    await user.click(document.body)
    expect(screen.queryByRole('list')).not.toBeInTheDocument()
  })

  it('has a transparent background', () => {
    const { container } = render(<Navbar />)
    const nav = container.querySelector('nav')
    expect(nav).toHaveClass('bg-transparent')
  })
})
