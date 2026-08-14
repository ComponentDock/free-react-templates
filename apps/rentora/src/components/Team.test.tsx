import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Team } from './Team'
import { TEAM } from '../data'

describe('Team', () => {
  it('shows the heading, blurb, three checklist items, and Read More button', () => {
    render(<Team />)

    expect(
      screen.getByRole('heading', { level: 2, name: TEAM.heading }),
    ).toBeInTheDocument()
    expect(screen.getByText(TEAM.blurb)).toBeInTheDocument()

    for (const item of TEAM.checklist) {
      expect(screen.getByText(item.text)).toBeInTheDocument()
    }

    expect(screen.getByRole('link', { name: TEAM.ctaLabel })).toBeInTheDocument()
  })

  it('shows the family photo', () => {
    const { container } = render(<Team />)
    const img = container.querySelector('img')!
    expect(img).toHaveAttribute('src', TEAM.image)
    expect(img).toHaveAttribute('alt', expect.stringContaining('Family'))
  })
})
