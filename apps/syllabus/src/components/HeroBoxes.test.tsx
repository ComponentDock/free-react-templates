import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HeroBoxes } from './HeroBoxes'

describe('HeroBoxes', () => {
  it('renders three info boxes with titles', () => {
    render(<HeroBoxes />)

    expect(screen.getByRole('heading', { level: 2, name: 'Online Courses' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Our Library' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Our Teachers' })).toBeInTheDocument()
  })

  it('renders view more links for each box', () => {
    render(<HeroBoxes />)

    const links = screen.getAllByText('view more')
    expect(links).toHaveLength(3)
    links.forEach((link) => {
      expect(link).toHaveAttribute('href', '#')
    })
  })

  it('renders three icon SVGs', () => {
    const { container } = render(<HeroBoxes />)
    const svgs = container.querySelectorAll('svg')
    expect(svgs.length).toBeGreaterThanOrEqual(3)
  })
})
