import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'
import { TESTIMONIALS } from '../data'

describe('Testimonials', () => {
  it('renders the heading and five testimonial columns', () => {
    render(<Testimonials />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'What people says behind their success' }),
    ).toBeInTheDocument()
    expect(screen.getAllByText('Dave Henderson')).toHaveLength(TESTIMONIALS.length)
    expect(screen.getAllByRole('blockquote')).toHaveLength(TESTIMONIALS.length)
    const avatars = document.querySelectorAll('img[aria-hidden="true"]')
    expect(avatars).toHaveLength(TESTIMONIALS.length)
  })
})
