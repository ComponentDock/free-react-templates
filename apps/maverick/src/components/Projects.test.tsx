import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders the heading and six project tiles', () => {
    render(<Projects />)
    expect(screen.getByRole('heading', { level: 2, name: 'Our Projects' })).toBeInTheDocument()
    const tiles = screen.getAllByRole('link', {
      name: /Branding & Illustration Design/,
    })
    expect(tiles).toHaveLength(6)
  })

  it('renders a photo per tile with the hover overlay', () => {
    const { container } = render(<Projects />)
    expect(container.querySelectorAll('img')).toHaveLength(6)
    const overlay = container.querySelector('div[class*="opacity-0"]')
    expect(overlay?.className).toContain('group-hover:opacity-90')
  })
})
