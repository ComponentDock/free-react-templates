import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders the header with logo', () => {
    render(<App />)
    const logo = screen.getAllByText(/Visage/)[0]
    expect(logo).toBeInTheDocument()
  })

  it('renders navigation buttons', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Skills' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Services' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Contact' })).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<App />)
    expect(screen.getByText(/Available for freelance work/i)).toBeInTheDocument()
  })

  it('renders the sidebar with general information', () => {
    render(<App />)
    expect(screen.getByText(/General Information/)).toBeInTheDocument()
    expect(screen.getAllByText(/Jeremy Smith/).length).toBeGreaterThanOrEqual(1)
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const footerLink = screen.getByRole('link', { name: /Component Dock/i })
    expect(footerLink).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('switches tabs when clicking navigation', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: 'Skills' }))
    expect(screen.getByText(/Technical Skills/)).toBeInTheDocument()
  })

  it('falls back to About panel for unknown tab', () => {
    render(<App initialTab="unknown" />)
    expect(screen.getByText('HTML5 & CSS Developer')).toBeInTheDocument()
  })
})
