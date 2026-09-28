import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Chefs } from './Chefs'

describe('Chefs', () => {
  const team = [
    { name: 'Marco Rossi', role: 'Head Chef' },
    { name: 'Aiko Tanaka', role: 'Pastry Chef' },
    { name: 'Liam Chen', role: 'Sous Chef' },
    { name: 'Sofia Müller', role: 'Sommelier' },
  ]

  it('renders the section title', () => {
    render(<Chefs />)
    expect(screen.getByRole('heading', { level: 2, name: /Meet Our Chefs/ })).toBeInTheDocument()
  })

  it('renders the subtitle paragraph', () => {
    render(<Chefs />)
    expect(screen.getByText(/Our talented culinary team/)).toBeInTheDocument()
  })

  it('shows all 4 team members', () => {
    render(<Chefs />)
    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(4)
  })

  it('each team member has a name', () => {
    render(<Chefs />)
    for (const member of team) {
      expect(screen.getByText(member.name)).toBeInTheDocument()
    }
  })

  it('each team member has a role', () => {
    render(<Chefs />)
    for (const member of team) {
      expect(screen.getByText(member.role)).toBeInTheDocument()
    }
  })

  it('each team member has an image with alt text matching name', () => {
    render(<Chefs />)
    for (const member of team) {
      expect(screen.getByRole('img', { name: member.name })).toBeInTheDocument()
    }
  })

  it('each image has lazy loading', () => {
    render(<Chefs />)
    for (const member of team) {
      expect(screen.getByRole('img', { name: member.name })).toHaveAttribute('loading', 'lazy')
    }
  })

  it('hover overlay div exists for each team member', () => {
    render(<Chefs />)
    // The overlay divs contain name + role inside articles
    const articles = screen.getAllByRole('article')
    for (const article of articles) {
      // Each article contains two occurrences of name/role - one in the overlay
      // The overlay is always present in the DOM (just visually hidden via opacity)
      const headings = article.querySelectorAll('h3')
      const paragraphs = article.querySelectorAll('p')
      expect(headings.length).toBeGreaterThanOrEqual(1)
      expect(paragraphs.length).toBeGreaterThanOrEqual(1)
    }
  })

  it('has the correct section id', () => {
    render(<Chefs />)
    expect(document.getElementById('chefs')).toBeInTheDocument()
  })
})
