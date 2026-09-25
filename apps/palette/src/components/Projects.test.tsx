import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders the projects heading', () => {
    render(<Projects />)
    expect(screen.getByRole('heading', { name: 'My Projects' })).toBeInTheDocument()
  })

  it('renders all eight project cards', () => {
    render(<Projects />)

    const titles = [
      'E-commerce Redesign',
      'Mobile App UI',
      'Brand Identity',
      'Dashboard Design',
      'Social Media Campaign',
      'Landing Page',
      'Icon Set',
      'SEO Strategy',
    ]

    for (const title of titles) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }

    expect(screen.getAllByRole('img')).toHaveLength(8)
  })
})
