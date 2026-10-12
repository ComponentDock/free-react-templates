import { render, screen } from '@testing-library/react'
import { REGISTRY, REGISTRY_HEADING } from '../lib/site'
import { GiftRegistry } from './GiftRegistry'

describe('the gift registry band', () => {
  it('sets five houses, each a mark and a name, resting at half strength', () => {
    const { container } = render(<GiftRegistry />)

    expect(screen.getByRole('heading', { name: REGISTRY_HEADING })).toBeInTheDocument()

    const items = Array.from(container.querySelectorAll('li'))
    const classes = items.map((item) => (item.getAttribute('class') ?? '').split(' '))

    expect(items).toHaveLength(5)
    expect(classes.every((tokens) => tokens.includes('opacity-50'))).toBe(true)
    expect(classes.every((tokens) => tokens.includes('hover:opacity-100'))).toBe(true)
    expect(container.querySelectorAll('svg')).toHaveLength(5)

    for (const mark of REGISTRY) {
      expect(screen.getByText(mark.name)).toBeInTheDocument()
    }
  })
})
