import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders about section', () => {
    render(<Footer />)
    expect(screen.getByText('About Us')).toBeDefined()
  })

  it('renders services list', () => {
    render(<Footer />)
    expect(screen.getByText('Boost Your Body')).toBeDefined()
    expect(screen.getByText('Achieve Your Goal')).toBeDefined()
    expect(screen.getByText('Analyze Your Goal')).toBeDefined()
    expect(screen.getByText('Improve Your Performance')).toBeDefined()
  })

  it('renders contact info', () => {
    render(<Footer />)
    expect(screen.getByText(/203 Fake St/)).toBeDefined()
    expect(screen.getByText('+2 392 3929 210')).toBeDefined()
    expect(screen.getByText('info@vigor.com')).toBeDefined()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByText('More templates at Component Dock')
    expect(link).toBeDefined()
    expect(link.closest('a')?.getAttribute('href')).toBe('https://www.componentdock.com/')
  })

  it('renders copyright with Component Dock', () => {
    render(<Footer />)
    expect(screen.getAllByText(/Component Dock/).length).toBeGreaterThanOrEqual(2)
  })

  it('renders social links', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Twitter')).toBeDefined()
    expect(screen.getByLabelText('Facebook')).toBeDefined()
    expect(screen.getByLabelText('Instagram')).toBeDefined()
  })
})
