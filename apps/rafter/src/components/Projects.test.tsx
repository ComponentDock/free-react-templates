import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Projects } from './Projects'

describe('Projects', () => {
  it('shows the projects heading and caption', () => {
    render(<Projects />)
    expect(screen.getByRole('heading', { name: /Alex Complex for esidence/ })).toBeInTheDocument()
  })

  it('renders at least three project images with captions', () => {
    render(<Projects />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(3)
  })
})
