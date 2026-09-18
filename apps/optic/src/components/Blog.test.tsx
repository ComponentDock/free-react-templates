import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: 'Blog Posts' })).toBeInTheDocument()
  })

  it('renders all three blog posts', () => {
    render(<Blog />)
    expect(
      screen.getByRole('heading', { name: 'Why Photography Is Good For Business' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Tips For Better Wedding Photos' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'The Art Of Portrait Photography' }),
    ).toBeInTheDocument()
  })

  it('renders Read More links', () => {
    render(<Blog />)
    const links = screen.getAllByText('Read More')
    expect(links).toHaveLength(3)
  })
})
