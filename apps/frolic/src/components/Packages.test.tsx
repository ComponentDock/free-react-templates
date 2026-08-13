import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Packages } from './Packages'

describe('Packages', () => {
  it('renders the section heading and three white package cards', () => {
    const { container } = render(<Packages />)

    expect(screen.getByText('Packages You Like')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Our Packages')
    expect(container.querySelector('section')!.className).toContain('bg-lake')

    const titles = screen.getAllByRole('heading', { level: 3 }).map((h) => h.textContent)
    expect(titles).toEqual(['Indoor Games', 'Outdoor Game and Event', 'Camping for Kids'])

    const titles2 = screen.getAllByRole('heading', { level: 3 })
    expect(titles2[0]!.className).toContain('text-lagoon')
    expect(titles2[1]!.className).toContain('text-leaf')
    expect(titles2[2]!.className).toContain('text-coral')

    const cards = container.querySelectorAll('article')
    expect(cards).toHaveLength(3)
    expect(cards[0]!.className).toContain('rounded-[7px]')
    expect(container.querySelectorAll('svg')).toHaveLength(3)

    const buttons = screen.getAllByRole('link', { name: 'LEARN MORE' })
    expect(buttons).toHaveLength(3)
    expect(buttons[0]!.className).toContain('bg-cherry')
    expect(buttons[1]!.className).toContain('bg-amber')
    expect(buttons[2]!.className).toContain('bg-leaf')
  })
})
