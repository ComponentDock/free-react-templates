import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)

    expect(screen.getByRole('heading', { name: 'Recent Blog' })).toBeInTheDocument()
  })

  it('renders all three blog post cards', () => {
    render(<Blog />)

    expect(screen.getByText('How to Achieve a Perfect Lawn This Fall')).toBeInTheDocument()
    expect(screen.getByText('Top 5 Benefits of Regular Lawn Aeration')).toBeInTheDocument()
    expect(screen.getByText('Watering Tips for a Drought-Resistant Yard')).toBeInTheDocument()
  })

  it('renders Read More links', () => {
    render(<Blog />)

    const links = screen.getAllByText('Read More')
    expect(links).toHaveLength(3)
  })

  it('renders blog post images', () => {
    render(<Blog />)

    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(3)
  })
})
