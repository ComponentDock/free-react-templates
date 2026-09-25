import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Skills } from './Skills'

describe('Skills', () => {
  it('renders section heading', () => {
    render(<Skills />)
    expect(screen.getByText('My Skills')).toBeDefined()
  })

  it('renders all skill names', () => {
    render(<Skills />)
    expect(screen.getByText('Photoshop')).toBeDefined()
    expect(screen.getByText('JavaScript')).toBeDefined()
    expect(screen.getByText('HTML5')).toBeDefined()
    expect(screen.getByText('CSS3')).toBeDefined()
    expect(screen.getByText('WordPress')).toBeDefined()
    expect(screen.getByText('SEO')).toBeDefined()
  })

  it('renders progress bars with correct values', () => {
    render(<Skills />)
    const progressBars = screen.getAllByRole('progressbar')
    expect(progressBars).toHaveLength(6)
    expect(progressBars[0]!.getAttribute('aria-valuenow')).toBe('75')
  })

  it('renders my specialty label', () => {
    render(<Skills />)
    expect(screen.getByText('My Specialty')).toBeDefined()
  })

  it('renders description text', () => {
    render(<Skills />)
    expect(screen.getByText(/Big Oxmox/)).toBeDefined()
  })
})
