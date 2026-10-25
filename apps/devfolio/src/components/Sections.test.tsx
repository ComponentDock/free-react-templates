import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ABOUT, CONTACT, PERSON, TOOLS } from '../content'
import { About } from './About'
import { Contact } from './Contact'
import { Tools } from './Tools'

describe('About', () => {
  it('renders the three-line heading and both paragraphs', () => {
    render(<About />)
    expect(screen.getByText('HOW I APPROACH THE WORK')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Understand it.Build it.Make it clearer.',
    )
    ABOUT.paragraphs.forEach((paragraph) => {
      expect(screen.getByText(paragraph)).toBeInTheDocument()
    })
  })

  it('renders the three principles as rules', () => {
    render(<About />)
    ABOUT.principles.forEach((principle) => {
      expect(screen.getByRole('heading', { level: 3, name: principle.title })).toBeInTheDocument()
      expect(screen.getByText(principle.body)).toBeInTheDocument()
    })
  })
})

describe('Tools', () => {
  it('renders the heading, the résumé link and the four cells', () => {
    render(<Tools />)
    expect(screen.getByText('TOOLS / EXPERIENCE')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'A practicalstarting point.',
    )
    expect(screen.getByRole('link', { name: 'Experience and résumé →' })).toHaveAttribute(
      'href',
      '#/resume',
    )
    TOOLS.cells.forEach((cell) => {
      expect(screen.getByRole('heading', { level: 3, name: cell.title })).toBeInTheDocument()
      expect(screen.getByText(cell.body)).toBeInTheDocument()
    })
  })
})

describe('Contact', () => {
  it('renders the blue panel, the mailto action and the honesty note', () => {
    const { container } = render(<Contact />)
    expect(screen.getByText('HAVE SOMETHING IN MIND?')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      "Let's build somethingworth using.",
    )
    expect(screen.getByRole('link', { name: /nadia@example.com/ })).toHaveAttribute(
      'href',
      `mailto:${PERSON.email}`,
    )
    expect(screen.getByText(CONTACT.note)).toBeInTheDocument()
    expect(container.querySelector('form')).toBeNull()
  })
})
