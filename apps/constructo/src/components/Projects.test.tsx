import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders section title', () => {
    render(<Projects />)
    expect(screen.getByText('Our Featured Works')).toBeInTheDocument()
  })

  it('renders 8 project images', () => {
    render(<Projects />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(8)
  })

  it('renders view project links', () => {
    render(<Projects />)
    const viewLinks = screen.getAllByText('View Project')
    expect(viewLinks.length).toBeGreaterThanOrEqual(8)
  })
})
