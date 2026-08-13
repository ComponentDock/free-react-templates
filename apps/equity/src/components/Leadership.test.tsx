import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Leadership } from './Leadership'

describe('Leadership', () => {
  it('shows three team cards with photo, name, role, bio, and socials', () => {
    render(<Leadership />)

    expect(screen.getByRole('heading', { level: 2, name: 'Our Leadership' })).toBeInTheDocument()

    for (const name of ['Jean Smith', 'Bob Carry', 'Ricky Fisher']) {
      const card = screen.getByRole('heading', { level: 3, name }).closest('div')!
      expect(card.querySelector('img')).toHaveAttribute('alt', name)
      expect(card).toHaveTextContent('Lorem ipsum dolor sit amet')
    }

    expect(screen.getAllByRole('link', { name: 'twitter' })).toHaveLength(3)
    expect(screen.getAllByRole('link', { name: 'facebook' })).toHaveLength(3)
    expect(screen.getAllByRole('link', { name: 'linkedin' })).toHaveLength(3)
  })
})
