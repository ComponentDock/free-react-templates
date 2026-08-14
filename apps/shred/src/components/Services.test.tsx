import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Services } from './Services'
import { SERVICES } from '../data'

describe('Services', () => {
  it('renders the subheading and heading', () => {
    render(<Services />)

    expect(screen.getByText('Sexy & Healthy')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Get a Perfect Body' }),
    ).toBeInTheDocument()
  })

  it('renders five icon services', () => {
    render(<Services />)

    const cards = screen.getAllByRole('listitem')
    expect(cards).toHaveLength(SERVICES.length)
    SERVICES.forEach((service, i) => {
      expect(
        within(cards[i]!).getByRole('heading', { level: 3, name: service.title }),
      ).toBeInTheDocument()
      expect(within(cards[i]!).getByText(service.text)).toBeInTheDocument()
      expect(cards[i]!.querySelector('svg')).not.toBeNull()
    })
  })
})
