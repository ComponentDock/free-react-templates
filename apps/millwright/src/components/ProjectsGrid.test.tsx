import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProjectsGrid } from './ProjectsGrid'
import { projects } from '../data'

describe('ProjectsGrid', () => {
  it('renders the heading, lead, and six project tiles', () => {
    const { container } = render(<ProjectsGrid />)

    expect(screen.getByRole('heading', { name: 'Our Latest Projects' })).toBeInTheDocument()

    for (const project of projects) {
      expect(screen.getByRole('link', { name: project.title })).toBeInTheDocument()
    }

    // Six tile images (decorative -> no img role).
    expect(container.querySelectorAll('img')).toHaveLength(6)
  })
})
