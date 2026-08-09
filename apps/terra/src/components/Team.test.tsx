import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

const memberNames = ['Kaye Bruce', 'Lanie William', 'Catherine Smith', 'Sonya Lopez']

describe('Team', () => {
  it('shows the heading and four expert member cards', () => {
    render(<Team />)
    expect(
      screen.getByRole('heading', { name: 'Our Expert Makeup & Beautician Artist' }),
    ).toBeInTheDocument()

    for (const name of memberNames) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
      expect(screen.getByRole('img', { name })).toBeInTheDocument()
    }
    for (const label of ['Twitter', 'Facebook', 'Instagram']) {
      expect(screen.getAllByRole('link', { name: label })).toHaveLength(4)
    }
  })
})
