import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading, subheading, paragraphs, and LEARN MORE link', () => {
    render(<About />)

    expect(screen.getByRole('heading', { name: 'The River' })).toBeInTheDocument()
    expect(screen.getByText('10 years of excellence')).toBeInTheDocument()
    expect(screen.getByText(/Experience luxury and comfort/)).toBeInTheDocument()
    expect(screen.getByText(/From our stunning ocean-view suites/)).toBeInTheDocument()
    expect(screen.getByText(/Join thousands of satisfied guests/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LEARN MORE' })).toBeInTheDocument()
  })

  it('renders 3 images from picsum.photos', () => {
    render(<About />)

    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(3)

    expect(screen.getByRole('img', { name: 'Resort exterior view' })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
    expect(screen.getByRole('img', { name: 'Resort lobby' })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
    expect(screen.getByRole('img', { name: 'Resort beach' })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })
})
