import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo', () => {
    render(<Navbar />)
    expect(screen.getByText('Indigo')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    for (const label of ['Home', 'Feature', 'Pricing', 'Testimonial', 'Contact']) {
      expect(screen.getAllByText(label).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('renders the Sign up button', () => {
    render(<Navbar />)
    expect(screen.getAllByText('Sign up').length).toBeGreaterThanOrEqual(1)
  })

  it('toggles mobile menu open and closed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Open menu')
    await user.click(toggle)
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument()
    await user.click(screen.getByLabelText('Close menu'))
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByLabelText('Open menu'))
    const featureLinks = screen.getAllByText('Feature')
    // The mobile menu link is the last one visible
    const mobileLink = featureLinks[featureLinks.length - 1]!
    await user.click(mobileLink)
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
  })

  it('closes mobile menu when Sign up is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByLabelText('Open menu'))
    const signUpButtons = screen.getAllByText('Sign up')
    // The mobile Sign up link is the last one
    const mobileSignUp = signUpButtons[signUpButtons.length - 1]!
    await user.click(mobileSignUp)
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
  })
})
