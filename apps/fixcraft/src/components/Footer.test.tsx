import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders brand name', () => {
    render(<Footer />)
    expect(screen.getAllByText(/Fixcraft/).length).toBeGreaterThanOrEqual(1)
  })

  it('renders services list', () => {
    render(<Footer />)
    expect(screen.getByText('Oil Change')).toBeDefined()
    expect(screen.getByText('Tire Change')).toBeDefined()
    expect(screen.getByText('Engine Repair')).toBeDefined()
  })

  it('renders contact info', () => {
    render(<Footer />)
    expect(
      screen.getByText('203 Fake St. Mountain View, San Francisco, California, USA'),
    ).toBeDefined()
    expect(screen.getByText('+2 392 3929 210')).toBeDefined()
  })

  it('renders business hours', () => {
    render(<Footer />)
    expect(screen.getByText('Business Hours')).toBeDefined()
    expect(screen.getByText(/Monday – Friday/)).toBeDefined()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toBeDefined()
    expect(link.closest('a')?.getAttribute('href')).toBe('https://www.componentdock.com/')
  })

  it('renders copyright', () => {
    render(<Footer />)
    expect(screen.getByText(/© 2026 Fixcraft/)).toBeDefined()
  })
})
