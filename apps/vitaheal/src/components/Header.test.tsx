import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Header } from './Header'

describe('Header', () => {
  it('renders the Vitaheal+ logo', () => {
    render(<Header />)
    expect(screen.getByText(/vitaheal/)).toBeInTheDocument()
    expect(screen.getByText('+')).toBeInTheDocument()
  })

  it('shows quick links in the top bar', () => {
    render(<Header />)
    expect(screen.getByText('Help Desk')).toBeInTheDocument()
    expect(screen.getByText('Emergency Services')).toBeInTheDocument()
    expect(screen.getByText('Appointment')).toBeInTheDocument()
  })

  it('displays the phone number', () => {
    render(<Header />)
    expect(screen.getByText('+34 586 778 8892')).toBeInTheDocument()
  })

  it('renders main navigation links', () => {
    render(<Header />)
    const nav = screen.getByLabelText('Main navigation')
    expect(nav).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('News')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('has a search button', () => {
    render(<Header />)
    expect(screen.getByLabelText('Search')).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const { userEvent } = await import('@testing-library/user-event')
    const user = userEvent.setup()
    render(<Header />)
    const toggle = screen.getByLabelText('Open menu')
    await user.click(toggle)
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const { userEvent } = await import('@testing-library/user-event')
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByLabelText('Open menu'))
    // Click the About Us link in the mobile menu
    const mobileLinks = screen.getAllByText('About Us')
    // The second one is in the mobile dropdown
    await user.click(mobileLinks[1]!)
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
  })
})
