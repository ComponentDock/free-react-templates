import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading and subtitle', () => {
    render(<Hero />)
    expect(screen.getByText(/We Are Leading The Way Construction Works/i)).toBeInTheDocument()
    expect(screen.getByText('Fastest-Growing Construction Company')).toBeInTheDocument()
  })

  it('renders CTA button', () => {
    render(<Hero />)
    const btn = screen.getByText('Get Started')
    expect(btn).toBeInTheDocument()
    expect(btn.getAttribute('href')).toBe('#contact')
  })

  it('renders with custom className', () => {
    render(<Hero className="extra" />)
    const section = screen.getByTestId('hero')
    expect(section.className).toContain('extra')
  })
})
