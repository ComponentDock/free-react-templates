import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders 4-column layout with headings', () => {
    render(<Footer />)
    expect(screen.getByText('Quick Links')).toBeDefined()
    expect(screen.getByText('Our Cakes')).toBeDefined()
    expect(screen.getByText('Contact Us')).toBeDefined()
  })

  it('shows logo and social icons', () => {
    render(<Footer />)
    expect(screen.getByText('Batterly')).toBeDefined()
    expect(screen.getByLabelText('Facebook')).toBeDefined()
    expect(screen.getByLabelText('Twitter')).toBeDefined()
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link.closest('a')?.getAttribute('href')).toBe('https://www.componentdock.com/')
  })

  it('shows contact information', () => {
    render(<Footer />)
    expect(screen.getByText(/123 Bakery Street/)).toBeDefined()
    expect(screen.getByText('+10 (56) 745 3095')).toBeDefined()
  })

  it('has quick links', () => {
    render(<Footer />)
    expect(screen.getByText('Home')).toBeDefined()
    expect(screen.getByText('About')).toBeDefined()
    expect(screen.getByText('Services')).toBeDefined()
  })

  it('has cake variety links', () => {
    render(<Footer />)
    expect(screen.getByText('Blackforest')).toBeDefined()
    expect(screen.getByText('Red Velvet')).toBeDefined()
  })
})
