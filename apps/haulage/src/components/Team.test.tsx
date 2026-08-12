import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'
import { TEAM } from '../data'

describe('Team', () => {
  it('renders all six team member cards with names, roles and social links', () => {
    render(<Team />)

    expect(screen.getByRole('heading', { level: 2, name: 'Our Staff' })).toBeInTheDocument()

    for (const member of TEAM) {
      expect(screen.getByRole('heading', { level: 3, name: member.name })).toBeInTheDocument()
      expect(screen.getByAltText(member.name)).toHaveAttribute('src', member.image)
      expect(screen.getByRole('link', { name: `${member.name} on Twitter` })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: `${member.name} on Facebook` })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: `${member.name} on Instagram` })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: `${member.name} on LinkedIn` })).toBeInTheDocument()
    }
    /* Three members share the Co-Founder role; the rest are unique. */
    expect(screen.getAllByText('Co-Founder')).toHaveLength(3)
    for (const role of ['Financial Manager', 'Loader Manager', 'Package Manager']) {
      expect(screen.getByText(role)).toBeInTheDocument()
    }
  })
})
