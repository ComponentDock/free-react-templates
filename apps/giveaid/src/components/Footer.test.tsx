import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders About heading', () => {
    render(<Footer />)
    expect(screen.getAllByText('About').length).toBeGreaterThanOrEqual(1)
  })

  it('renders Contact & Address section', () => {
    render(<Footer />)
    expect(screen.getByText('Contact & Address')).toBeInTheDocument()
  })

  it('renders Quick Links section', () => {
    render(<Footer />)
    expect(screen.getByText('Quick Links')).toBeInTheDocument()
  })

  it('renders Social section', () => {
    render(<Footer />)
    expect(screen.getByText('Social')).toBeInTheDocument()
  })

  it('renders social icon links', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })

  it('renders copyright with Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders all quick links', () => {
    render(<Footer />)
    expect(screen.getAllByText('About').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Success Stories')).toBeInTheDocument()
    expect(screen.getByText('Waiting Children')).toBeInTheDocument()
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument()
    expect(screen.getByText('Terms of Use')).toBeInTheDocument()
    expect(screen.getByText('Disclaimers')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders contact address', () => {
    render(<Footer />)
    expect(screen.getByText('34 Street Name, City Name Here, United States')).toBeInTheDocument()
  })

  it('renders contact phone', () => {
    render(<Footer />)
    expect(screen.getByText('+1 242 4942 290')).toBeInTheDocument()
  })
})
