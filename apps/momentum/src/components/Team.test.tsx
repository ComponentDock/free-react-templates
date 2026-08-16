import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Team } from './Team'
import { teamMembers } from '../data'

describe('Team', () => {
  it('renders the heading and two member cards with photo, role, bio and CTA', () => {
    render(<Team />)

    expect(screen.getByText('Team')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Meet our team' })).toBeInTheDocument()

    for (const member of teamMembers) {
      const card = screen.getByRole('heading', { name: member.name }).closest('div')!
      expect(within(card).getByAltText(member.name)).toHaveAttribute('src', member.image)
      expect(within(card).getByText(member.position)).toBeInTheDocument()
      expect(within(card).getByText(member.bio)).toBeInTheDocument()
      expect(within(card).getByRole('link', { name: 'Read bio' })).toBeInTheDocument()
    }
  })
})
