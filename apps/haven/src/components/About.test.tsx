import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the section title and heading', () => {
    render(<About />)

    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Intercontinental LA Westlake Hotel',
    )
  })

  it('renders the description paragraphs', () => {
    render(<About />)

    expect(screen.getByText(/leading online accommodation site/)).toBeInTheDocument()
    expect(screen.getByText(/booking the perfect hotel/)).toBeInTheDocument()
  })

  it('renders the Read More link', () => {
    render(<About />)

    expect(screen.getByRole('link', { name: 'Read More' })).toBeInTheDocument()
  })

  it('renders two placeholder images', () => {
    render(<About />)

    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(2)
    images.forEach((img) => {
      expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    })
  })
})
