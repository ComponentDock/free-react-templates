import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders three colored feature cards with icons and copy', () => {
    const { container } = render(<Features />)

    const titles = screen.getAllByRole('heading', { level: 2 }).map((h) => h.textContent)
    expect(titles).toEqual(['Indoor Games', 'Outdoor Game And Event', 'Camping for Kids'])

    expect(screen.getAllByText(/Lorem ipsum dolor sit amet/)).toHaveLength(3)
    expect(container.querySelectorAll('svg')).toHaveLength(3)

    const cards = container.querySelectorAll('article')
    expect(cards).toHaveLength(3)
    expect(cards[0]!.className).toContain('bg-coral')
    expect(cards[1]!.className).toContain('bg-sunflower')
    expect(cards[2]!.className).toContain('bg-lagoon')
    expect(cards[0]!.querySelector('span')!.className).toContain('rounded-full')
  })
})
