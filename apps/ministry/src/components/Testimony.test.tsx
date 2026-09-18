import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimony } from './Testimony'

describe('Testimony', () => {
  it('renders section heading', () => {
    render(<Testimony />)
    expect(screen.getByText('Testimony')).toBeInTheDocument()
    expect(screen.getByText('Transform Lives')).toBeInTheDocument()
  })

  it('renders testimonial names', () => {
    render(<Testimony />)
    expect(screen.getByText('Michael Fox')).toBeInTheDocument()
    expect(screen.getByText('Mike Shawn')).toBeInTheDocument()
    expect(screen.getByText('Mark Smith')).toBeInTheDocument()
    expect(screen.getByText('Kyle Meyer')).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimony />)
    const quotes = screen.getAllByText(/far from the countries/)
    expect(quotes.length).toBe(4)
  })

  it('renders avatar images', () => {
    render(<Testimony />)
    const avatars = screen.getAllByRole('img') as HTMLImageElement[]
    const personImgs = avatars.filter((img) =>
      ['Michael Fox', 'Mike Shawn', 'Mark Smith', 'Kyle Meyer'].includes(img.alt),
    )
    expect(personImgs.length).toBe(4)
  })
})
