import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the about section heading and description', () => {
    render(<About />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /When you believe in yourself/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Fitnest is a premier yoga teacher training school/i),
    ).toBeInTheDocument()
  })

  it('renders the More About Us button', () => {
    render(<About />)
    expect(screen.getByRole('link', { name: 'More About Us' })).toHaveAttribute('href', '#services')
  })

  it('renders the images', () => {
    render(<About />)
    expect(screen.getByRole('img', { name: 'Yoga session outdoors' })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
    expect(screen.getByRole('img', { name: 'Meditation pose' })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })

  it('renders the quote', () => {
    render(<About />)
    expect(screen.getByText(/Yoga is the journey of the self/)).toBeInTheDocument()
  })
})
