import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Testimonies } from './Testimonies'

describe('Testimonies', () => {
  it('renders the section heading', () => {
    render(<Testimonies />)
    expect(screen.getByText('Testimonies')).toBeInTheDocument()
  })

  it('renders all 4 testimonial names', () => {
    render(<Testimonies />)
    expect(screen.getByText('Katie Johnson')).toBeInTheDocument()
    expect(screen.getByText('Jane Mars')).toBeInTheDocument()
    expect(screen.getByText('Shane Holmes')).toBeInTheDocument()
    expect(screen.getByText('Mark Johnson')).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonies />)
    expect(screen.getByText(/completely changed my approach/)).toBeInTheDocument()
    expect(screen.getByText(/nothing compares to GritBox/)).toBeInTheDocument()
  })

  it('renders avatar images', () => {
    render(<Testimonies />)
    const avatars = screen.getAllByRole('img')
    const testimonialAvatars = avatars.filter((img) =>
      ['Katie Johnson', 'Jane Mars', 'Shane Holmes', 'Mark Johnson'].includes(
        (img as HTMLImageElement).alt,
      ),
    )
    expect(testimonialAvatars.length).toBe(4)
  })

  it('has an id of testimonies on the section', () => {
    render(<Testimonies />)
    expect(document.getElementById('testimonies')).toBeTruthy()
  })
})
