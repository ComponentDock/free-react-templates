import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeatureCards } from './FeatureCards'

describe('FeatureCards', () => {
  it('renders three overlapping cards with matching badges and buttons', () => {
    const { container } = render(<FeatureCards />)

    expect(container.querySelector('section')!.id).toBe('features')
    const grid = container.querySelector('section > div > div')!
    expect(grid.className).toContain('-translate-y-20')

    expect(screen.getAllByRole('heading', { name: 'Card title treatment' })).toHaveLength(3)
    expect(screen.getAllByRole('button', { name: 'Go somewhere' })).toHaveLength(3)

    const buttons = screen.getAllByRole('button', { name: 'Go somewhere' })
    expect(buttons[0]!.className).toContain('bg-info')
    expect(buttons[1]!.className).toContain('bg-success')
    expect(buttons[2]!.className).toContain('bg-warning')

    const badges = Array.from(container.querySelectorAll('span.rounded-full'))
    expect(badges).toHaveLength(3)
    expect(badges[0]!.className).toContain('bg-info')
    expect(badges[2]!.className).toContain('bg-warning')
  })
})
