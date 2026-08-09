import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('shows the section heading and three artist cards', () => {
    render(<Team />)

    expect(screen.getByRole('heading', { name: 'Meet Our Artist' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Adam Billiard' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Fred Macyard' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Justin Stuard' })).toBeInTheDocument()
  })

  it('renders social links for each artist', () => {
    render(<Team />)

    const adam = screen.getByRole('heading', { name: 'Adam Billiard' }).closest('article')!
    expect(within(adam).getByRole('link', { name: 'Adam Billiard GitHub' })).toHaveAttribute(
      'href',
      '#team',
    )
    expect(within(adam).getByRole('link', { name: 'Adam Billiard X' })).toBeInTheDocument()
    expect(within(adam).getByRole('link', { name: 'Adam Billiard LinkedIn' })).toBeInTheDocument()
  })

  it('shows a portrait for each artist', () => {
    render(<Team />)

    expect(screen.getAllByRole('img', { name: /portrait/ })).toHaveLength(3)
  })
})
