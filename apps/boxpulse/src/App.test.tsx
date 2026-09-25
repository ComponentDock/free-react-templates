import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
    expect(screen.getByText(/We Craft Awesome/)).toBeInTheDocument()
    expect(screen.getAllByText('Services').length).toBeGreaterThanOrEqual(2)
    expect(screen.getAllByText('Portfolio').length).toBeGreaterThanOrEqual(2)
    expect(screen.getByText('Crafters')).toBeInTheDocument()
    expect(screen.getByText('Stories')).toBeInTheDocument()
    expect(screen.getByText('Offer')).toBeInTheDocument()
    expect(screen.getByText('Expertise')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Component Dock/ })).toBeInTheDocument()
    expect(screen.getAllByRole('contentinfo').length).toBeGreaterThanOrEqual(1)
  })

  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('BoxPulse — Creative Digital Agency Template')
  })

  it('toggles mobile menu open and closed', async () => {
    const user = userEvent.setup()
    render(<App />)
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('closes mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()
    // Click the first mobile nav link (Home)
    const mobileLinks = screen.getAllByText('Home')
    // The last one is in the mobile menu
    const mobileHome = mobileLinks[mobileLinks.length - 1]
    if (mobileHome) await user.click(mobileHome)
    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
    })
  })

  it('renders contact form with all fields', () => {
    render(<App />)
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Subject')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
  })

  it('submits contact form without page reload', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(screen.getByLabelText('Name'), 'Test User')
    await user.type(screen.getByLabelText('Email'), 'test@example.com')
    await user.type(screen.getByLabelText('Subject'), 'Hello')
    await user.type(screen.getByLabelText('Message'), 'Test message')
    await user.click(screen.getByRole('button', { name: 'Send Message' }))
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
  })

  it('renders progress bars with correct percentages', () => {
    render(<App />)
    expect(screen.getByRole('progressbar', { name: /HTML/ })).toHaveAttribute('aria-valuenow', '81')
    expect(screen.getByRole('progressbar', { name: /CSS/ })).toHaveAttribute('aria-valuenow', '93')
    expect(screen.getByRole('progressbar', { name: /PSD/ })).toHaveAttribute('aria-valuenow', '72')
    expect(screen.getByRole('progressbar', { name: /Design/ })).toHaveAttribute(
      'aria-valuenow',
      '99',
    )
  })
})
