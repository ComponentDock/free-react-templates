import { render, screen } from '@testing-library/react'
import { Hero } from './components/Hero'

describe('Hero', () => {
  it('renders the subtitle "Shop is fun"', () => {
    render(<Hero />)
    expect(screen.getByText('Shop is fun')).toBeInTheDocument()
  })

  it('renders the heading "Browse Our Premium Product"', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /browse our premium product/i }),
    ).toBeInTheDocument()
  })

  it('renders the Browse Now button', () => {
    render(<Hero />)
    expect(screen.getByText('Browse Now')).toBeInTheDocument()
  })

  it('renders a description paragraph', () => {
    render(<Hero />)
    expect(screen.getByText(/discover the latest trends/i)).toBeInTheDocument()
  })

  it('renders the hero image', () => {
    render(<Hero />)
    const img = screen.getByAltText('Featured fashion product')
    expect(img).toBeInTheDocument()
  })
})
