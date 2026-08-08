import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { GetInvolved } from './GetInvolved'

describe('GetInvolved', () => {
  it('shows the eyebrow, heading and intro', () => {
    render(<GetInvolved />)

    expect(screen.getByText('Get Involved')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /Ways to Connect/ })).toBeInTheDocument()
    expect(screen.getByText(/No matter where you are in your faith journey/)).toBeInTheDocument()
  })

  it('shows the four connect cards with titles, blurbs and links', () => {
    render(<GetInvolved />)

    const cards: Array<[string, RegExp, string]> = [
      ['Plan Your Visit', /help you feel at home/, 'Plan Visit'],
      ['Join a Group', /Life is better together/, 'Find a Group'],
      ['Serve with Us', /Use your gifts to make a difference/, 'Start Serving'],
      ['Next Steps', /Ready to go deeper/, 'Explore Next Steps'],
    ]

    for (const [title, blurb, link] of cards) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
      expect(screen.getByText(blurb)).toBeInTheDocument()
      expect(screen.getByRole('link', { name: new RegExp(link) })).toBeInTheDocument()
    }
  })
})
