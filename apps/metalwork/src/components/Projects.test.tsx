import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Projects } from './Projects'
import { projects } from '../data'

describe('Projects', () => {
  it('renders the heading and all six project tiles as links', () => {
    const { container } = render(<Projects />)

    expect(screen.getByRole('heading', { name: 'Projects' })).toBeInTheDocument()

    for (const project of projects) {
      expect(screen.getByRole('link', { name: project.title })).toHaveAttribute('href', '#projects')
    }

    expect(container.querySelectorAll('img')).toHaveLength(projects.length)
  })
})
