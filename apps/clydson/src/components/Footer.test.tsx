import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Footer', () => {
  it('renders footer sections', () => {
    render(<Footer />)
    expect(screen.getByText('Lets talk about')).toBeInTheDocument()
    expect(screen.getByText('Links')).toBeInTheDocument()
    const servicesElements = screen.getAllByText('Services')
    expect(servicesElements.length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Have a Questions?')).toBeInTheDocument()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders social icons', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })

  it('renders nav links', () => {
    render(<Footer />)
    expect(screen.getAllByText('Home').length).toBeGreaterThan(0)
    expect(screen.getAllByText('About').length).toBeGreaterThan(0)
  })

  it('renders services list', () => {
    render(<Footer />)
    expect(screen.getByText('Web Design')).toBeInTheDocument()
    expect(screen.getByText('Web Development')).toBeInTheDocument()
    expect(screen.getByText('Business Strategy')).toBeInTheDocument()
    expect(screen.getByText('Data Analysis')).toBeInTheDocument()
    expect(screen.getByText('Graphic Design')).toBeInTheDocument()
  })

  it('renders contact details', () => {
    render(<Footer />)
    expect(
      screen.getByText('203 Fake St. Mountain View, San Francisco, California, USA'),
    ).toBeInTheDocument()
    expect(screen.getByText('+2 392 3929 210')).toBeInTheDocument()
    expect(screen.getByText('info@yourdomain.com')).toBeInTheDocument()
  })

  it('renders learn more button', () => {
    render(<Footer />)
    expect(screen.getByText('Learn more')).toBeInTheDocument()
  })
})
