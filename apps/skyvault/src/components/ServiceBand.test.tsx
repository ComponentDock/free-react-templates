import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ServiceBand } from './ServiceBand'

describe('ServiceBand', () => {
  it('keeps a violet fill and an own placeholder photo behind the white title', () => {
    render(<ServiceBand />)

    const section = document.getElementById('services')!
    expect(section).toHaveClass(
      'bg-plum-mid',
      'pt-[96px]',
      'pb-[127px]',
      'scroll-mt-[124px]',
      'overflow-hidden',
    )

    const photo = section.querySelector('img')!
    expect(photo).toHaveAttribute('src', 'https://picsum.photos/seed/skyvault-band/1920/1080')
    expect(photo).toHaveAttribute('aria-hidden', 'true')
    expect(photo).toHaveClass('object-cover')

    const overlay = section.querySelector('div[aria-hidden="true"]')!
    expect(overlay.className).toContain('linear-gradient')

    expect(screen.getByRole('heading', { level: 2, name: 'Services built for uptime' })).toHaveClass(
      'text-white',
    )
  })

  it('renders three white cards with a mint hover outline and muted icons', () => {
    const { container } = render(<ServiceBand />)

    const cards = Array.from(container.querySelectorAll('article'))
    expect(cards).toHaveLength(3)
    expect(cards.map((card) => card.querySelector('h3')?.textContent)).toEqual([
      'Cloud backup',
      'Data migration',
      'Virtual servers',
    ])

    cards.forEach((card) => {
      expect(card).toHaveClass(
        'bg-surface',
        'rounded-[12px]',
        'border-2',
        'border-transparent',
        'hover:border-mint',
        'focus-within:border-mint',
      )
      expect(card.querySelector('svg')).toHaveClass('h-[75px]', 'text-icon-muted')
    })
  })

  it('floats a Read more chip 32px below each card', () => {
    const { container } = render(<ServiceBand />)

    const chips = screen.getAllByRole('link', { name: 'Read more' })
    expect(chips).toHaveLength(3)
    chips.forEach((chip) => {
      expect(chip).toHaveAttribute('href', '#contact')
      expect(chip).toHaveClass(
        'absolute',
        'bottom-[-32px]',
        'left-1/2',
        '-translate-x-1/2',
        'h-[63px]',
        'w-[157px]',
        'bg-surface-chip',
        'hover:bg-mint',
      )
    })
    expect(container.querySelectorAll('article .absolute.bottom-\\[-32px\\]')).toHaveLength(3)
  })
})
