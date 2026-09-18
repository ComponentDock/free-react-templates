import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { News } from './News'

describe('News', () => {
  it('renders the section heading', () => {
    render(<News />)
    expect(screen.getByRole('heading', { name: /latest news/i })).toBeInTheDocument()
  })

  it('renders all three blog post titles', () => {
    render(<News />)
    expect(screen.getByText(/how to ace your next job interview/i)).toBeInTheDocument()
    expect(screen.getByText(/top skills employers/i)).toBeInTheDocument()
    expect(screen.getByText(/remote work/i)).toBeInTheDocument()
  })
})
