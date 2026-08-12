import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Team } from './Team'

describe('Team', () => {
  it('renders three trainer cards with names, roles, and photos', () => {
    render(<Team />)

    expect(screen.getByText('our team')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Meet with trainers' }),
    ).toBeInTheDocument()

    for (const name of ['Ava Fletcher', 'Maya Lewis', 'Sofia Grant']) {
      expect(screen.getByRole('heading', { level: 3, name })).toBeInTheDocument()
    }
    expect(screen.getAllByText('Personal trainer')).toHaveLength(3)
    expect(document.querySelectorAll('img')).toHaveLength(3)
  })

  it('renders social icon links in the photo overlay', () => {
    render(<Team />)

    const socialLinks = screen.getAllByRole('link', { name: /on social media/ })
    expect(socialLinks).toHaveLength(12)
  })
})
