import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Events } from './Events'

describe('Events', () => {
  it('renders the section title and the four tour cards with price, date and duration', () => {
    render(<Events />)

    expect(screen.getByText('Check our best promotional tour')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Upcoming Events' })).toBeInTheDocument()

    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(4)

    const images = screen.getAllByRole('img')
    expect(images[0]).toHaveAttribute('src', 'https://picsum.photos/seed/wanderbug-event-1/600/420')
    expect(images[0]).toHaveAttribute('alt', 'Mega Turkey tour')

    expect(screen.getAllByRole('link', { name: 'Mega Turkey' })).toHaveLength(2)
    expect(screen.getByRole('link', { name: 'Finlande' })).toHaveAttribute('href', '#events')
    expect(screen.getByRole('link', { name: 'Spitzberg' })).toBeInTheDocument()
    expect(screen.getAllByText('$1200')).toHaveLength(4)
    expect(screen.getAllByText('5 Days')).toHaveLength(4)
  })

  it('steps one card at a time and clamps at both ends', async () => {
    const user = userEvent.setup()
    render(<Events />)

    const track = screen.getByTestId('events-track')
    expect(track).toHaveStyle({ transform: 'translateX(-0%)' })

    await user.click(screen.getByRole('button', { name: 'Previous events' }))
    expect(track).toHaveStyle({ transform: 'translateX(-0%)' })

    await user.click(screen.getByRole('button', { name: 'Next events' }))
    expect(track.style.transform).toContain('translateX(-33.33')

    await user.click(screen.getByRole('button', { name: 'Next events' }))
    expect(track.style.transform).toContain('translateX(-33.33')

    await user.click(screen.getByRole('button', { name: 'Previous events' }))
    expect(track).toHaveStyle({ transform: 'translateX(-0%)' })
  })
})
