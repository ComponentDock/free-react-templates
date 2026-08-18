import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'

const track = () => {
  const el = document.querySelector('[data-testimonial-track]') as HTMLElement
  return el.style.transform
}

describe('Testimonials', () => {
  it('renders the heading and all quote cards with names and roles', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: 'Testimonials' })).toBeInTheDocument()

    const names = [
      'Alex Morgan',
      'Priya Shah',
      'Daniel Kim',
      'Sofia Reyes',
      'Tom Becker',
      'Lena Fischer',
      'Marcus Webb',
      'Yuki Tanaka',
    ]
    names.forEach((name) => {
      const card = screen.getByLabelText(`Testimonial: ${name}`)
      expect(within(card).getByRole('heading', { name })).toBeInTheDocument()
      expect(card.querySelector('p')).toHaveTextContent(/[a-z]/)
      expect(card.querySelector('svg')).toBeInTheDocument()
    })
    expect(screen.getByText('Travel Blogger')).toBeInTheDocument()
    expect(screen.getByText('Resort Manager')).toBeInTheDocument()
  })

  it('advances one card at a time and wraps around', () => {
    render(<Testimonials />)
    expect(track()).toBe('translateX(0%)')

    fireEvent.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(track()).toBe('translateX(-12.5%)')

    for (let i = 0; i < 7; i += 1) {
      fireEvent.click(screen.getByRole('button', { name: 'Next testimonial' }))
    }
    expect(track()).toBe('translateX(0%)')
  })

  it('moves back with previous and wraps to the last card', () => {
    render(<Testimonials />)
    fireEvent.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(track()).toBe('translateX(-87.5%)')

    fireEvent.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(track()).toBe('translateX(-75%)')
  })
})
