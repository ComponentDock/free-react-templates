import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading and three post cards', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: /Recent From Blog/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Tips on How to Maintain Your Brand New Car/i }),
    ).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(3)
  })

  it('renders a Read more link on every post', () => {
    render(<Blog />)
    expect(screen.getAllByRole('link', { name: /Read more/i })).toHaveLength(3)
  })
})
