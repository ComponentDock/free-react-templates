import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { defaultSeason, Seasons } from './Seasons'
import { services } from '../data'

describe('defaultSeason', () => {
  it('reads October to March as heating', () => {
    expect(defaultSeason(9)).toBe('heating')
    expect(defaultSeason(0)).toBe('heating')
  })

  it('reads April to September as cooling', () => {
    expect(defaultSeason(5)).toBe('cooling')
  })
})

describe('Seasons', () => {
  it('opens on the cooling catalogue in a summer month', () => {
    render(<Seasons today={new Date(2026, 5, 5)} />)

    expect(
      screen.getByRole('heading', { name: 'It is cooling season in Millbrook' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Cooling' })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: 'Heating' })).toHaveAttribute('aria-pressed', 'false')

    for (const service of services.cooling) {
      expect(screen.getByRole('heading', { name: service.title })).toBeInTheDocument()
    }
    expect(screen.queryByRole('heading', { name: 'No heat' })).not.toBeInTheDocument()
    expect(screen.getByText('From $6,400 installed')).toBeInTheDocument()
  })

  it('opens on the heating catalogue in a winter month', () => {
    render(<Seasons today={new Date(2026, 10, 5)} />)

    expect(
      screen.getByRole('heading', { name: 'It is heating season in Millbrook' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Heating' })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('heading', { name: 'Furnace replacement' })).toBeInTheDocument()
    expect(screen.getByText('From $4,800 installed')).toBeInTheDocument()
  })

  it('swaps the whole catalogue from the season pills', async () => {
    const user = userEvent.setup()
    render(<Seasons today={new Date(2026, 5, 5)} />)

    await user.click(screen.getByRole('button', { name: 'Heating' }))

    expect(
      screen.getByRole('heading', { name: 'It is heating season in Millbrook' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'No heat' })).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: 'AC not cooling' })).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Heating' })).toHaveAttribute('aria-pressed', 'true')

    await user.click(screen.getByRole('button', { name: 'Cooling' }))

    expect(
      screen.getByRole('heading', { name: 'It is cooling season in Millbrook' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'AC not cooling' })).toBeInTheDocument()
  })

  it('keeps the sample-price footnote under the grid', () => {
    render(<Seasons today={new Date(2026, 5, 5)} />)

    expect(
      screen.getByText(
        'Starting prices are shown for guidance. Your quote is fixed in writing before any part is fitted.',
      ),
    ).toBeInTheDocument()
  })
})
