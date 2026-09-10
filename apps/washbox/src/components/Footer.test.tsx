import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders contact info', () => {
    render(<Footer />)
    expect(screen.getByText('(80) 783 367-3904')).toBeInTheDocument()
    expect(screen.getByText('info@washbox.com')).toBeInTheDocument()
    expect(screen.getByText('123 Clean Street, Auto City')).toBeInTheDocument()
  })

  it('renders opening hours', () => {
    render(<Footer />)
    expect(screen.getByText('Mon-Fri')).toBeInTheDocument()
    expect(screen.getByText('9:00 – 19:00')).toBeInTheDocument()
    expect(screen.getByText('Sat')).toBeInTheDocument()
    expect(screen.getByText('12:00 – 19:00')).toBeInTheDocument()
    expect(screen.getByText('Sun')).toBeInTheDocument()
    expect(screen.getByText('Closed')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Footer />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders Component Dock attribution link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders social icon links', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Pinterest')).toBeInTheDocument()
  })

  it('renders copyright bar', () => {
    render(<Footer />)
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })

  it('renders WashBox logo text', () => {
    render(<Footer />)
    expect(screen.getByText('WashBox')).toBeInTheDocument()
  })
})
