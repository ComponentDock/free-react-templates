import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { People } from './People'
import { PEOPLE } from '../content'

describe('People', () => {
  it('renders four member cards with handles, chips and circle counts', () => {
    render(<People />)

    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(PEOPLE.length)

    expect(screen.getByText('Léa Moreau')).toBeInTheDocument()
    expect(screen.getByText('@lea')).toBeInTheDocument()
    expect(screen.getAllByText('In 2 circles with you')).toHaveLength(2)
    expect(screen.getAllByText('In 1 circle with you')).toHaveLength(2)

    const leaCard = screen.getByText('Léa Moreau').closest('li') as HTMLElement
    expect(within(leaCard).getByText('Sunday Climbers')).toBeInTheDocument()
    expect(within(leaCard).getByText('Book Club')).toBeInTheDocument()
    expect(within(leaCard).getByRole('button', { name: 'Follow' })).toBeInTheDocument()
  })

  it('shows no follower or popularity number', () => {
    render(<People />)
    expect(screen.queryByText(/followers/i)).toBeNull()
    expect(screen.queryByText(/friends/i)).toBeNull()
  })

  it('toggles Follow to Following and back without navigating', () => {
    render(<People />)

    const buttons = screen.getAllByRole('button', { name: 'Follow' })
    expect(buttons).toHaveLength(4)
    const button = buttons[0] as HTMLElement
    expect(button).toHaveAttribute('aria-pressed', 'false')

    fireEvent.click(button)
    expect(screen.getAllByRole('button', { name: 'Following' })[0]).toHaveAttribute(
      'aria-pressed',
      'true',
    )

    fireEvent.click(screen.getAllByRole('button', { name: 'Following' })[0] as HTMLElement)
    expect(screen.getAllByRole('button', { name: 'Follow' })).toHaveLength(4)
  })
})
