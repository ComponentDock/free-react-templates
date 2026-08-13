import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Attorneys } from './Attorneys'
import { attorneys } from '../data'

describe('Attorneys', () => {
  it('renders the centered heading', () => {
    render(<Attorneys />)
    expect(screen.getByText(attorneys.eyebrow)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: attorneys.headline })).toBeInTheDocument()
  })

  it('renders four flip cards with name and role on the front', () => {
    render(<Attorneys />)
    const names = screen.getAllByRole('heading', { level: 3 })
    expect(names.length).toBe(4)
    for (const member of attorneys.members) {
      expect(screen.getByRole('heading', { level: 3, name: member.name })).toBeInTheDocument()
      expect(screen.getAllByText(member.role).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('hides the gold back panel with quote, author row, and socials', () => {
    const { container } = render(<Attorneys />)
    for (const member of attorneys.members) {
      expect(screen.getByText(new RegExp(member.quote.slice(0, 20)))).toBeInTheDocument()
    }
    const brandIcons = container.querySelectorAll('svg')
    expect(brandIcons.length).toBe(attorneys.members.length * 3)
  })
})
