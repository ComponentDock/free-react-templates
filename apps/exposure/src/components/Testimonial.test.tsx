import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Testimonial } from './Testimonial'

describe('Testimonial', () => {
  it('renders the quote, round founder photo, coral name and role', () => {
    render(<Testimonial />)
    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument()
    expect(screen.getByText('Jessya Inn')).toBeInTheDocument()
    const name = screen.getByText('Jessya Inn')
    expect(name.className).toContain('text-brand')
    expect(screen.getByText('Chif Photographer')).toBeInTheDocument()
    const portrait = document.querySelector('img[alt=""]')!
    expect(portrait).toHaveAttribute('src', expect.stringContaining('exposure-founder'))
    expect(portrait.className).toContain('rounded-full')
  })
})
