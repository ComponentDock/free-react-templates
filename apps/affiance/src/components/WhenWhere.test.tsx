import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { WhenWhere } from './WhenWhere'
import { EVENT_PLACES } from '../lib/site'

describe('WhenWhere', () => {
  it('opens with the design eyebrow and band title on the light band', () => {
    const { container } = render(<WhenWhere />)

    expect(screen.getByText('Planning')).toHaveClass('border-dashed')
    expect(screen.getByRole('heading', { level: 2, name: 'When & Where' })).toHaveClass('font-script')
    expect(container.querySelector('section')).toHaveClass('bg-band')
  })

  it('tops each column with the white disc and its own glyph', () => {
    const ceremony = render(<WhenWhere />)

    const ceremonyDisc = screen.getByTestId('place-church').querySelector('span') as HTMLElement

    expect(ceremonyDisc).toHaveClass('h-[100px]', 'w-[100px]', 'rounded-full', 'bg-white', 'shadow-disc')
    expect(ceremonyDisc.querySelector('svg')).toHaveClass('h-[50px]', 'w-[50px]', 'text-brand')

    ceremony.unmount()

    render(<WhenWhere />)

    const receptionDisc = screen.getByTestId('place-cake').querySelector('span') as HTMLElement

    expect(receptionDisc.querySelector('svg')).toHaveClass('h-[50px]')
  })

  it('prints the date, the time, the address and a dialable number', () => {
    render(<WhenWhere />)

    const place = screen.getByTestId('place-church')

    expect(place.querySelector('h3')).toHaveTextContent(EVENT_PLACES[0]!.title)
    expect(place).toHaveTextContent(EVENT_PLACES[0]!.date)
    expect(place).toHaveTextContent(EVENT_PLACES[0]!.time)
    expect(place.querySelectorAll('address span')).toHaveLength(2)
    expect(place.querySelector('address span')).toHaveTextContent('The Old Meeting House')

    const phones = screen.getAllByRole('link', { name: EVENT_PLACES[0]!.phone })

    expect(phones).toHaveLength(2)
    for (const phone of phones) {
      expect(phone).toHaveAttribute('href', 'tel:+18025550134')
    }
  })

  it('links each column to a keyless map in a new tab', () => {
    render(<WhenWhere />)

    const maps = screen.getAllByRole('link', { name: 'See Map' })

    expect(maps).toHaveLength(2)

    for (const [position, link] of maps.entries()) {
      expect(link).toHaveAttribute('href', EVENT_PLACES[position]!.map)
      expect(link.getAttribute('href')).toContain('openstreetmap.org')
      expect(link.getAttribute('href')).not.toMatch(/key=/i)
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noreferrer')
      expect(link).toHaveClass('border-tint', 'rounded-[4px]', 'uppercase', 'text-brand')
      expect(link).not.toHaveClass('rounded-lg')
    }
  })
})
