import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PROFILE } from '../content'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the three-line claim with the middle line in lime', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toBe('Good interfaces.Clear thinking.Useful code.')
    expect(screen.getByText('Clear thinking.')).toHaveClass('text-lime')
  })

  it('renders the eyebrow, intro and both actions', () => {
    render(<Hero />)
    expect(screen.getByText('NADIA OKAFOR / FRONTEND DEVELOPER')).toBeInTheDocument()
    expect(screen.getByText(/build for the person on the other side of the screen/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Explore the projects/ })).toHaveAttribute('href', '#work')
    expect(screen.getByRole('link', { name: /Read my résumé/ })).toHaveAttribute('href', '#/resume')
  })

  it('renders the JSON editor from the typed profile', () => {
    render(<Hero />)
    const editor = screen.getByRole('group', { name: 'Developer profile summary' })
    expect(editor.textContent).toContain(`"name": "${PROFILE.name}"`)
    PROFILE.focus.forEach((item) => {
      expect(editor.textContent).toContain(`"${item}"`)
    })
    expect(editor.textContent).toContain('"currently": "open to conversations"')
    expect(screen.getByText('about-me.json')).toBeInTheDocument()
    expect(screen.getByText('UTF-8')).toBeInTheDocument()
  })

  it('renders the numbered hero foot', () => {
    render(<Hero />)
    expect(screen.getByText('Working demos')).toBeInTheDocument()
    expect(screen.getByText('Technical case studies')).toBeInTheDocument()
    expect(screen.getByText('Source you can read')).toBeInTheDocument()
    expect(screen.getByText('01')).toBeInTheDocument()
  })
})
