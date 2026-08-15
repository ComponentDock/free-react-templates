import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { projectFilters, projects, projectsSubtext, projectsTitle } from '../data'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders the heading, subtext and all filter tabs', () => {
    render(<Projects />)
    expect(screen.getByRole('heading', { name: projectsTitle })).toBeInTheDocument()
    expect(screen.getByText(projectsSubtext)).toBeInTheDocument()
    for (const filter of projectFilters) {
      expect(screen.getByRole('button', { name: filter })).toBeInTheDocument()
    }
  })

  it('renders every project card', () => {
    render(<Projects />)
    for (const project of projects) {
      expect(screen.getByRole('heading', { name: project.title })).toBeInTheDocument()
      expect(screen.getByRole('img', { name: project.alt })).toHaveAttribute('src', project.image)
    }
  })

  it('marks the first filter active by default and toggles on click', async () => {
    const user = userEvent.setup()
    render(<Projects />)
    const first = screen.getByRole('button', { name: projectFilters[0]! })
    expect(first).toHaveAttribute('aria-pressed', 'true')

    const second = screen.getByRole('button', { name: projectFilters[1]! })
    await user.click(second)
    expect(second).toHaveAttribute('aria-pressed', 'true')
    expect(first).toHaveAttribute('aria-pressed', 'false')
  })
})
