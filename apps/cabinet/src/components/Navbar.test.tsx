import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo', () => {
    render(<Navbar />)
    expect(screen.getByText('Cabinet')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Shop')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggleButton = screen.getByLabelText('Open menu')
    await user.click(toggleButton)
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument()
    expect(screen.getByLabelText('Mobile navigation')).toBeInTheDocument()
    await user.click(screen.getByLabelText('Close menu'))
    expect(screen.queryByLabelText('Mobile navigation')).not.toBeInTheDocument()
  })

  it('closes mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByLabelText('Open menu'))
    expect(screen.getByLabelText('Mobile navigation')).toBeInTheDocument()
    const mobileLinks = screen.getAllByText('Home')
    await user.click(mobileLinks[1]!)
    expect(screen.queryByLabelText('Mobile navigation')).not.toBeInTheDocument()
  })

  it('has navigation aria label', () => {
    render(<Navbar />)
    expect(screen.getByLabelText('Main navigation')).toBeInTheDocument()
  })
})
