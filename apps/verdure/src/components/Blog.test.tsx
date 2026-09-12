import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2, name: /Recent Post/i })).toBeInTheDocument()
  })

  it('renders three blog cards with titles', () => {
    render(<Blog />)
    const titles = screen.getAllByText(/Spring Pruning Tips/i)
    expect(titles.length).toBe(3)
  })

  it('renders read more buttons', () => {
    render(<Blog />)
    const readMore = screen.getAllByRole('button', { name: /read more/i })
    expect(readMore.length).toBe(3)
  })
})
