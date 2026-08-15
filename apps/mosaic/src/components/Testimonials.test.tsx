import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading, subtitle and five testimonial cards', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { level: 2, name: 'Customer Says' })).toBeInTheDocument()
    expect(screen.getByText('Our satisfied customer says')).toBeInTheDocument()

    const names = ['Dennis Green', 'Sarah Winters', 'Marcus Cole', 'Elena Ruiz', 'Tom Bennett']
    const positions = [
      'Marketing Manager',
      'Interface Designer',
      'UI Designer',
      'Web Developer',
      'System Analytics',
    ]
    for (const name of names) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
    for (const position of positions) {
      expect(screen.getByText(position)).toBeInTheDocument()
    }
    expect(screen.getAllByRole('figure')).toHaveLength(5)
  })

  it('renders an avatar and a quote per card', () => {
    render(<Testimonials />)
    const section = screen.getByRole('region', { name: 'Customer Says' })
    expect(section.querySelectorAll('img')).toHaveLength(5)
    expect(section.querySelectorAll('blockquote')).toHaveLength(5)
  })
})
