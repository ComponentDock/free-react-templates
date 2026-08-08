import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading and three article cards', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: /Our Blog/i })).toBeInTheDocument()
    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(3)
    expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(3)
    expect(screen.getAllByRole('img').length).toBe(3)
  })
})
