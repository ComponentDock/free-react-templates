import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders section heading', () => {
    render(<Blog />)

    expect(screen.getByText('Latest News')).toBeInTheDocument()
    expect(screen.getByText('Recent From Blog')).toBeInTheDocument()
  })

  it('renders three blog cards with titles', () => {
    render(<Blog />)

    expect(screen.getByText('Give Hope to the People Need Most')).toBeInTheDocument()
    expect(screen.getByText('Building Communities Through Kindness')).toBeInTheDocument()
    expect(screen.getByText('How Your Donations Change Lives')).toBeInTheDocument()
  })

  it('renders Read More links', () => {
    render(<Blog />)

    const readMoreLinks = screen.getAllByText('Read More')
    expect(readMoreLinks).toHaveLength(3)
  })

  it('renders blog images', () => {
    render(<Blog />)

    const images = screen.getAllByAltText(/^Blog:/)
    expect(images).toHaveLength(3)
  })

  it('renders dates and authors', () => {
    render(<Blog />)

    expect(screen.getByText('Feb. 22, 2024')).toBeInTheDocument()
    expect(screen.getByText('Feb. 15, 2024')).toBeInTheDocument()
    expect(screen.getByText('Feb. 8, 2024')).toBeInTheDocument()
  })

  it('has section with id blog', () => {
    const { container } = render(<Blog />)

    const section = container.querySelector('#blog')
    expect(section).toBeInTheDocument()
  })
})
