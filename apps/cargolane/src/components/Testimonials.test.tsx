import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { TESTIMONIALS } from '../data/content'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders a centered quote with round avatar and author line', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { level: 2, name: 'Testimonials' })).toBeInTheDocument()
    expect(screen.getByText(`“${TESTIMONIALS[0].quote}”`)).toBeInTheDocument()
    expect(screen.getByText(TESTIMONIALS[0].author)).toBeInTheDocument()
    expect(screen.getByText(TESTIMONIALS[0].role)).toBeInTheDocument()
    const avatar = screen.getByRole('img', { name: TESTIMONIALS[0].author })
    expect(avatar.className).toContain('rounded-full')
    expect(avatar.className).toContain('h-[100px]')
    expect(screen.getByText(`“${TESTIMONIALS[0].quote}”`).className).toContain('italic')
  })

  it('cycles through all testimonials with wrap-around', () => {
    render(<Testimonials />)
    expect(TESTIMONIALS.length).toBeGreaterThanOrEqual(4)
    for (const testimonial of TESTIMONIALS.slice(1)) {
      fireEvent.click(screen.getByRole('button', { name: 'Next testimonial' }))
      expect(screen.getByText(`“${testimonial.quote}”`)).toBeInTheDocument()
    }
    fireEvent.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(`“${TESTIMONIALS[0].quote}”`)).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(
      screen.getByText(`“${TESTIMONIALS[TESTIMONIALS.length - 1]!.quote}”`),
    ).toBeInTheDocument()
  })
})
