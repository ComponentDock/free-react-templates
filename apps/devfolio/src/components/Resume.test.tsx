import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PERSON, PROJECTS, RESUME } from '../content'
import { Resume } from './Resume'

describe('Resume', () => {
  it('renders the person, the role line and the summary', () => {
    render(<Resume />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(PERSON.name)
    expect(screen.getByText(RESUME.roleLine)).toBeInTheDocument()
    expect(screen.getByText(RESUME.summary)).toBeInTheDocument()
    expect(screen.getByText('Résumé')).toBeInTheDocument()
  })

  it('renders both roles with their bullets', () => {
    render(<Resume />)
    RESUME.experience.forEach((job) => {
      expect(
        screen.getByRole('heading', { level: 3, name: `${job.role} · ${job.org}` }),
      ).toBeInTheDocument()
      expect(screen.getByText(job.period)).toBeInTheDocument()
      job.bullets.forEach((bullet) => {
        expect(screen.getByText(bullet)).toBeInTheDocument()
      })
    })
  })

  it('lists the selected projects with their tags', () => {
    render(<Resume />)
    PROJECTS.forEach((project) => {
      expect(screen.getByRole('heading', { level: 3, name: project.name })).toBeInTheDocument()
      project.tags.forEach((tag) => {
        expect(screen.getAllByText(tag).length).toBeGreaterThan(0)
      })
    })
  })

  it('lists the tools and the education line', () => {
    render(<Resume />)
    RESUME.tools.items.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument()
    })
    expect(screen.getByText(RESUME.education.line)).toBeInTheDocument()
  })

  it('offers a way back to the portfolio', () => {
    render(<Resume />)
    expect(screen.getByRole('link', { name: '← Back to the portfolio' })).toHaveAttribute(
      'href',
      '#/',
    )
    expect(screen.getByRole('link', { name: 'More templates at Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
