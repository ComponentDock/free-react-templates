import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SpecialOffers } from './SpecialOffers'

describe('SpecialOffers', () => {
  it('renders four offer cards with prices, locations and pin icons', () => {
    const { container } = render(<SpecialOffers />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Special offers & Discounts' }),
    ).toBeInTheDocument()

    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(4)

    for (const title of [
      'Kaafu Atoll',
      'The White City',
      'Byodo-In Temple',
      'Arabische Emiraten',
    ]) {
      expect(screen.getByText(title)).toBeInTheDocument()
    }
    for (const location of ['Maldives', 'Greece', 'United States', 'Dubai']) {
      expect(screen.getByText(location)).toBeInTheDocument()
    }

    const prices = [...container.querySelectorAll('article p.text-brand')].map((price) =>
      price.textContent?.trim(),
    )
    expect(prices).toEqual(['$520', '$520', '$750', '$520'])

    const image = container.querySelector('article img')!
    expect(image).toHaveAttribute('src', 'https://picsum.photos/seed/trekvoyage-offer-1/600/450')
    expect(image.className).toContain('rounded-[4px]')

    const locationLine = container.querySelector('article p.text-loc\\/80')!
    expect(locationLine.textContent).toBe('Maldives')
    expect(locationLine.querySelector('svg')).not.toBeNull()
  })
})
