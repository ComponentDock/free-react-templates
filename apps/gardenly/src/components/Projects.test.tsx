import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Projects } from './Projects'
import { PROJECTS } from '../data'

describe('Projects', () => {
  it('renders the heading and four project cards with titles and View links', () => {
    render(<Projects />)
    expect(screen.getByRole('heading', { name: 'Feature Projects' })).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(PROJECTS.length)
    for (const project of PROJECTS) {
      expect(screen.getByRole('heading', { name: project.title })).toBeInTheDocument()
      expect(screen.getByAltText(`${project.title} photo`)).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link', { name: 'View' })).toHaveLength(PROJECTS.length)
  })
})
