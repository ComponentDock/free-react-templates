import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders the heading and a project gallery', () => {
    render(<Portfolio />)
    expect(screen.getByRole('heading', { name: /Our Portfolio Museum/i })).toBeInTheDocument()
    expect(screen.getAllByRole('img').length).toBeGreaterThanOrEqual(3)
  })

  it('shows project captions and a view-all-projects button', () => {
    render(<Portfolio />)
    expect(screen.getByRole('heading', { name: /Featured Projects/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /view all projects/i })).toBeInTheDocument()
  })
})
