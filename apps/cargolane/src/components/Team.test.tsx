import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TEAM } from '../data/content'
import { Team } from './Team'

describe('Team', () => {
  it('renders three person cards with photo, name, role, and blurb', () => {
    render(<Team />)
    expect(screen.getByRole('heading', { level: 2, name: 'Our Team' })).toBeInTheDocument()
    for (const person of TEAM) {
      expect(screen.getByRole('heading', { level: 3, name: person.name })).toBeInTheDocument()
      expect(screen.getByText(person.role)).toBeInTheDocument()
      expect(screen.getByText(person.blurb)).toBeInTheDocument()
      expect(screen.getByRole('img', { name: person.name }).getAttribute('src')).toBe(person.image)
    }
  })
})
