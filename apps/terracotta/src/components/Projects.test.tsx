import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders the section heading and project cards with captions', () => {
    render(<Projects />)
    expect(screen.getByRole('heading', { name: /our project/i })).toBeInTheDocument()
    const imgs = screen.getAllByRole('img')
    expect(imgs.length).toBeGreaterThanOrEqual(6)
    expect(screen.getByRole('heading', { name: /City Villa/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Lake House/i })).toBeInTheDocument()
  })
})
