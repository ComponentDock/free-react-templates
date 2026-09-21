import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { InstagramGrid } from './InstagramGrid'

describe('InstagramGrid', () => {
  it('renders heading text', () => {
    render(<InstagramGrid />)
    expect(screen.getByText('Sweet moments are saved as memories.')).toBeInTheDocument()
  })

  it('renders subtitle', () => {
    render(<InstagramGrid />)
    expect(screen.getByText('Follow us on instagram')).toBeInTheDocument()
  })

  it('renders Instagram handle', () => {
    render(<InstagramGrid />)
    expect(screen.getByText('@sweetcake')).toBeInTheDocument()
  })

  it('renders 6 instagram photo thumbnails', () => {
    render(<InstagramGrid />)
    const images = screen.getAllByRole('presentation')
    expect(images.length).toBe(6)
  })

  it('has instagram overlay icons', () => {
    render(<InstagramGrid />)
    const svgs = document.querySelectorAll('svg')
    expect(svgs.length).toBeGreaterThanOrEqual(6)
  })
})
