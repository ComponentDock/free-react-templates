import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders heading and blog post cards', () => {
    render(<Blog />)

    expect(screen.getByRole('heading', { level: 2, name: 'Blog' })).toBeInTheDocument()

    expect(screen.getByText('How To Cook Pasta?')).toBeInTheDocument()
    expect(screen.getByText('Best Recipes for Summer')).toBeInTheDocument()
  })

  it('renders Read More buttons', () => {
    render(<Blog />)

    const readMoreButtons = screen.getAllByRole('link', { name: 'Read More' })
    expect(readMoreButtons).toHaveLength(2)
    readMoreButtons.forEach((btn) => {
      expect(btn).toHaveAttribute('href', '#')
    })
  })

  it('has news section id', () => {
    const { container } = render(<Blog />)
    expect(container.querySelector('#news')).toBeInTheDocument()
  })
})
