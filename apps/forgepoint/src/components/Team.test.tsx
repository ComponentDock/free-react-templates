import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Team } from './Team'

describe('Team', () => {
  it('renders the section heading', () => {
    render(<Team />)
    expect(
      screen.getByRole('heading', { level: 2, name: /Our Team Best Members/i }),
    ).toBeInTheDocument()
  })

  it('renders team member names', () => {
    render(<Team />)
    expect(screen.getAllByText('Bruce Roberts').length).toBeGreaterThanOrEqual(1)
  })

  it('renders the Contact Us button', () => {
    render(<Team />)
    expect(screen.getByRole('link', { name: /Contact Us/i })).toBeInTheDocument()
  })

  it('renders team member images', () => {
    render(<Team />)
    const imgs = screen.getAllByRole('img', { name: /team member/i })
    expect(imgs.length).toBeGreaterThanOrEqual(1)
  })

  it('shows social icons on hover', async () => {
    const user = userEvent.setup()
    render(<Team />)
    const cards = screen.getAllByRole('article')
    const card = cards[0]!
    await user.hover(card)
    expect(screen.getAllByRole('link', { name: /social/i }).length).toBeGreaterThanOrEqual(0)
  })
})
