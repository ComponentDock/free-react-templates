import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the heading and four team members with roles', () => {
    render(<Team />)

    const section = screen.getByRole('region', { name: 'Team' })
    expect(
      within(section).getByRole('heading', { level: 2, name: 'Our Creative Team' }),
    ).toBeInTheDocument()

    for (const [name, role] of [
      ['Brandon Yeald', 'Founder & CEO'],
      ['Calvin Anderson', 'Graphics Designer'],
      ['Roman Solo', 'Wordpress Developer'],
      ['Yeald Kin', 'Software Engineer'],
    ] as const) {
      expect(within(section).getByRole('heading', { level: 3, name })).toBeInTheDocument()
      expect(within(section).getByText(role)).toBeInTheDocument()
    }

    expect(section.querySelectorAll('img')).toHaveLength(4)
  })

  it('renders social icon links for each member', () => {
    render(<Team />)

    const section = screen.getByRole('region', { name: 'Team' })
    expect(
      within(section).getByRole('link', { name: 'Brandon Yeald on Facebook' }),
    ).toHaveAttribute('href', '#team')
    expect(
      within(section).getByRole('link', { name: 'Calvin Anderson on Twitter' }),
    ).toBeInTheDocument()
    expect(
      within(section).getByRole('link', { name: 'Yeald Kin on Instagram' }),
    ).toBeInTheDocument()
    expect(section.querySelectorAll('a[aria-label*="on "]')).toHaveLength(12)
  })
})
