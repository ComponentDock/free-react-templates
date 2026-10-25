import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Channels } from '../components/Channels'
import { channels } from '../content'

describe('Channels', () => {
  it('draws every bar at the share-of-largest width, not the share of total', () => {
    render(<Channels />)
    for (const row of channels.rows) {
      const bar = screen.getByRole('img', { name: `${row.name}: ${row.share} percent of bookings` })
      const fill = bar.firstElementChild as HTMLElement
      expect(fill.style.width).toBe(`${row.fill}%`)
      expect(fill.className).toContain('bg-primary-700')
    }
    expect(screen.getByRole('img', { name: 'Your website: 44 percent of bookings' }).firstElementChild).toHaveStyle({
      width: '100%',
    })
  })

  it('prints the setup column and both footnotes', () => {
    render(<Channels />)
    expect(screen.getByText('One script tag')).toBeInTheDocument()
    expect(screen.getAllByText('Setup:')).toHaveLength(channels.rows.length)
    expect(screen.getByText(channels.note)).toBeInTheDocument()
    expect(screen.getByText(channels.secondNote)).toBeInTheDocument()
  })
})
