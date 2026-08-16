import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'
import { testimonials } from '../data'

describe('Testimonials', () => {
  it('renders the section label, heading, and intro copy', () => {
    render(<Testimonials />)

    expect(screen.getAllByText(testimonials.pill).length).toBeGreaterThan(0)
    expect(screen.getByRole('heading', { name: testimonials.heading })).toBeInTheDocument()
    expect(screen.getByText(testimonials.subline)).toBeInTheDocument()
  })

  it('renders a quote card with author details for every testimonial', () => {
    render(<Testimonials />)

    for (const item of testimonials.items) {
      expect(screen.getAllByText(`“${item.quote}”`).length).toBeGreaterThan(0)
      expect(screen.getByRole('heading', { name: item.name })).toBeInTheDocument()
      expect(screen.getAllByText(item.role).length).toBeGreaterThan(0)
      expect(screen.getByRole('img', { name: `${item.name} avatar` })).toHaveAttribute(
        'src',
        item.avatar,
      )
    }
  })
})
