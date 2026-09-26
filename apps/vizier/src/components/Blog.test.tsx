import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders blog section with Latest News heading', () => {
    render(<Blog />)
    expect(screen.getByTestId('blog')).toBeInTheDocument()
    expect(screen.getByText('Latest News')).toBeInTheDocument()
  })

  it('renders all blog post titles', () => {
    render(<Blog />)
    expect(screen.getByText('How To Use Eye Shadow Like The Stars')).toBeInTheDocument()
    expect(screen.getByText('What Curling Irons Are The Best Ones')).toBeInTheDocument()
    expect(screen.getByText('Top 10 Fashion Trends This Season')).toBeInTheDocument()
    expect(screen.getByText('How To Save Money On Beauty Products')).toBeInTheDocument()
  })
})
