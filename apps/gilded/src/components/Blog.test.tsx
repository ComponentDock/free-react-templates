import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading and three post cards with titles and dates', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: /latest news/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /5 hair trends that will define this season/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /the art of balayage/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /winter hair care/i })).toBeInTheDocument()
    expect(screen.getByText('January 15, 2031')).toBeInTheDocument()
    expect(screen.getByText('December 20, 2030')).toBeInTheDocument()
  })
})
