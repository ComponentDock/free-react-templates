import { render, screen, within } from '@testing-library/react'
import { TeamSection } from './TeamSection'
import { teamMembers } from '../data'

describe('TeamSection', () => {
  it('renders the heading, blurb and team cards with hover-overlay names and roles', () => {
    render(<TeamSection />)
    expect(screen.getByRole('heading', { name: /About Blogger Team/i })).toBeInTheDocument()
    expect(screen.getByText(/The people behind the stories/i)).toBeInTheDocument()

    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(teamMembers.length)

    for (const [index, member] of teamMembers.entries()) {
      const card = within(cards[index]!)
      // name + role appear in the hover overlay AND below the image
      expect(card.getAllByText(member.name)).toHaveLength(2)
      expect(card.getAllByText(member.role)).toHaveLength(2)
      expect(card.getByRole('img', { name: member.name })).toBeInTheDocument()
    }
  })
})
