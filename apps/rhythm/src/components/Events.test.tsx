import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Events } from './Events'

describe('Events', () => {
  it('shows the title and the first three event cards with photo, date, title and venue', () => {
    render(<Events />)

    expect(screen.getByRole('heading', { name: /Upcoming Events/i })).toBeInTheDocument()

    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(3)

    const texts = cards.map((card) => card.textContent)
    expect(texts[0]).toContain('Neon Nights Festival')
    expect(texts[0]).toContain('Funkhaus Berlin, Berlin, Germany')
    expect(texts[0]).toContain('Dec 15, 2019')
    expect(screen.getByRole('img', { name: 'Neon Nights Festival' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Beats on the Bay' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Miami Ultra Sessions' })).toBeInTheDocument()
  })

  it('advances and rewinds the carousel window with the arrow controls', async () => {
    const user = userEvent.setup()
    render(<Events />)

    const next = screen.getByRole('button', { name: 'Next events' })
    const prev = screen.getByRole('button', { name: 'Previous events' })
    expect(prev).toBeDisabled()

    const texts = () => screen.getAllByRole('article').map((card) => card.textContent)

    await user.click(next)
    expect(texts()[0]).toContain('Beats on the Bay')
    expect(texts()[2]).toContain('Sunset Rooftop Party')

    await user.click(next)
    expect(texts()[0]).toContain('Miami Ultra Sessions')

    await user.click(next)
    expect(texts()[0]).toContain('Sunset Rooftop Party')
    expect(texts()[2]).toContain('Desert Beats Open Air')
    expect(next).toBeDisabled()

    await user.click(prev)
    expect(texts()[0]).toContain('Miami Ultra Sessions')
    expect(next).not.toBeDisabled()
  })

  it('links each visible venue line to its location pin icon', () => {
    render(<Events />)
    const firstCard = screen.getAllByRole('article')[0]!
    expect(within(firstCard).getByText('Funkhaus Berlin, Berlin, Germany')).toBeInTheDocument()
  })
})
