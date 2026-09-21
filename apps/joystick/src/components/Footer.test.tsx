import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders brand name', () => {
    render(<Footer />)
    expect(screen.getAllByText('Joystick').length).toBeGreaterThanOrEqual(1)
  })

  it('renders Game Reviews column', () => {
    render(<Footer />)
    expect(screen.getByText('Game Reviews')).toBeDefined()
    expect(screen.getAllByText('Doom').length).toBeGreaterThanOrEqual(1)
  })

  it('renders Useful Links column', () => {
    render(<Footer />)
    expect(screen.getByText('Useful Links')).toBeDefined()
    expect(screen.getByText('Testimonials')).toBeDefined()
  })

  it("renders What's New column", () => {
    render(<Footer />)
    expect(screen.getByText("What's New")).toBeDefined()
  })

  it('renders Component Dock link in copyright', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders footer nav links', () => {
    render(<Footer />)
    const nav = screen.getByRole('navigation')
    expect(nav).toBeDefined()
    expect(screen.getByText('Home')).toBeDefined()
    expect(screen.getByText('Games')).toBeDefined()
    expect(screen.getByText('Articles')).toBeDefined()
    expect(screen.getAllByText('Reviews').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Contact').length).toBeGreaterThanOrEqual(1)
  })

  it('displays current year in copyright', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeDefined()
  })
})
