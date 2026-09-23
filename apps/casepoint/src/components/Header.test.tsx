import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Header } from './Header'

describe('Header', () => {
  it('renders logo text Casepoint', () => {
    render(<Header />)
    expect(screen.getByText('Casepoint')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Header />)
    const nav = screen.getByRole('navigation', { name: /main navigation/i })
    expect(nav).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Services' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Case Studies' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Blog' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('renders phone number button', () => {
    render(<Header />)
    expect(screen.getByText('01654.066.456')).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const menuButton = screen.getByRole('button', { name: /open menu/i })
    await user.click(menuButton)

    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: /mobile navigation/i })).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const mobileNav = screen.getByRole('navigation', { name: /mobile navigation/i })
    await user.click(within(mobileNav).getByText('Home'))

    expect(screen.queryByRole('navigation', { name: /mobile navigation/i })).not.toBeInTheDocument()
  })
})
