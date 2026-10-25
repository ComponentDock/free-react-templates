import { render, screen } from '@testing-library/react'
import { ProjectCard } from './ProjectCard'
import { projects, type Project } from '../content'

function project(id: Project['id']): Project {
  const found = projects.find((item) => item.id === id)
  if (!found) throw new Error(`missing project fixture: ${id}`)
  return found
}

describe('ProjectCard', () => {
  it('renders the meta line, title, blurb and the right-aligned glyph', () => {
    render(<ProjectCard project={project('coursework')} />)

    expect(screen.getByText('Coursework · Interaction design · 2026')).toBeInTheDocument()
    expect(screen.getByText('Finding your way, minus the guesswork')).toBeInTheDocument()
    expect(screen.getByText(/A campus wayfinding concept/)).toBeInTheDocument()
    expect(screen.getByText('↗')).toHaveAttribute('aria-hidden', 'true')
  })

  it('renders the concept art as a labelled image, not a photograph', () => {
    render(<ProjectCard project={project('coursework')} />)

    const art = screen.getByRole('img', { name: /Campus Path concept/ })
    expect(art.tagName).toBe('svg')
    expect(art).toHaveAttribute('viewBox', '0 0 900 590')
  })

  it('uses the second art direction for the second card', () => {
    render(<ProjectCard project={project('personal')} />)

    expect(screen.getByRole('img', { name: /Pantry Notes concept/ })).toBeInTheDocument()
    expect(screen.getByText('Personal project · Data storytelling · 2026')).toBeInTheDocument()
  })
})
