import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { projectCtaLabel, projects, projectsTitle } from '../data'
import { Projects } from './Projects'

describe('Projects', () => {
  it('shows the section heading', () => {
    render(<Projects />)
    expect(screen.getByRole('region', { name: projectsTitle })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: projectsTitle })).toBeInTheDocument()
  })

  it('renders six numbered cards in a two-column grid', () => {
    render(<Projects />)
    const region = screen.getByRole('region', { name: projectsTitle })
    const cards = within(region).getAllByRole('article')
    expect(cards).toHaveLength(6)
    for (const project of projects) {
      const card = within(region).getByText(project.name).closest('article')
      expect(within(card as HTMLElement).getByText(project.number)).toBeInTheDocument()
      expect(within(card as HTMLElement).getByText(project.description)).toBeInTheDocument()
      expect(
        within(card as HTMLElement).getByRole('button', { name: projectCtaLabel }),
      ).toBeInTheDocument()
    }
  })

  it('uses the accent color for the card CTA buttons', () => {
    render(<Projects />)
    const region = screen.getByRole('region', { name: projectsTitle })
    const buttons = within(region).getAllByRole('button', { name: projectCtaLabel })
    for (const button of buttons) {
      expect(button).toHaveClass('bg-accent', 'hover:bg-accent-dark')
    }
  })
})
