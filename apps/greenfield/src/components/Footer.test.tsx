import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders about section', () => {
    render(<Footer />)
    expect(screen.getByText('Greenfield')).toBeInTheDocument()
  })

  it('renders recent posts', () => {
    render(<Footer />)
    expect(screen.getByText('Recent Posts')).toBeInTheDocument()
    expect(screen.getByText('Modern Farming Techniques')).toBeInTheDocument()
    expect(screen.getByText('Benefits of Organic Agriculture')).toBeInTheDocument()
  })

  it('renders explore links', () => {
    render(<Footer />)
    expect(screen.getByText('Explore')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /home/i })).toHaveAttribute('href', '#home')
    expect(screen.getByRole('link', { name: /services/i })).toHaveAttribute('href', '#services')
  })

  it('renders contact info', () => {
    render(<Footer />)
    expect(screen.getByText('Have a Questions?')).toBeInTheDocument()
    expect(screen.getByText('123 Farm Road, Agri City, AC 12345')).toBeInTheDocument()
    expect(screen.getByText('+1 234 567 890')).toBeInTheDocument()
    expect(screen.getByText('info@greenfield.com')).toBeInTheDocument()
  })

  it('renders componentdock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders social icons', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /twitter/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /instagram/i })).toBeInTheDocument()
  })
})
