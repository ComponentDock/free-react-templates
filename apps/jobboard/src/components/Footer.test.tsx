import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders brand name', () => {
    render(<Footer />)
    expect(screen.getByText('JobBoard')).toBeInTheDocument()
  })

  it('renders brand description', () => {
    render(<Footer />)
    expect(screen.getByText(/Discover your next career/)).toBeInTheDocument()
  })

  it('renders Company links', () => {
    render(<Footer />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText('Career')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Resources')).toBeInTheDocument()
  })

  it('renders Support section with links', () => {
    render(<Footer />)
    expect(screen.getAllByText('Support').length).toBeGreaterThanOrEqual(2) // heading + link
    expect(screen.getByText('Privacy')).toBeInTheDocument()
    expect(screen.getByText('Terms of Service')).toBeInTheDocument()
  })

  it('renders Contact info', () => {
    render(<Footer />)
    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument()
    expect(screen.getByText('info@jobboard.com')).toBeInTheDocument()
    expect(screen.getByText('New York, NY')).toBeInTheDocument()
  })

  it('renders trending tags', () => {
    render(<Footer />)
    expect(screen.getByText('UI Designer')).toBeInTheDocument()
    expect(screen.getByText('Python')).toBeInTheDocument()
    expect(screen.getByText('HTML5')).toBeInTheDocument()
    expect(screen.getByText('CSS3')).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders copyright with current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
    expect(screen.getByText(/Made with/)).toBeInTheDocument()
  })

  it('does not reference ColorLib', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer.textContent).not.toMatch(/colorlib/i)
  })
})
