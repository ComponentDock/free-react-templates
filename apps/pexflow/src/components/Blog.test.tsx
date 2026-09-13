import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders section heading', () => {
    render(<Blog />)
    expect(screen.getByText('Recent News')).toBeInTheDocument()
  })

  it('renders three blog posts', () => {
    render(<Blog />)
    expect(screen.getByText('Modern Construction Trends in 2025')).toBeInTheDocument()
    expect(screen.getByText('Sustainable Building Materials Guide')).toBeInTheDocument()
    expect(screen.getByText('Engineering Excellence: Our Latest Project')).toBeInTheDocument()
  })

  it('renders read more links', () => {
    render(<Blog />)
    const readMoreLinks = screen.getAllByText(/read more/i)
    expect(readMoreLinks).toHaveLength(3)
  })
})
