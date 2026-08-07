import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'

const serviceTitles = ['Body Shrub', 'Relax Massage', 'Facial Spa', 'Body Shrub'] as const

describe('Services', () => {
  it('shows the heading "Our Services" with a peach underline bar', () => {
    render(<Services />)

    const heading = screen.getByRole('heading', { level: 2, name: 'Our Services' })
    expect(heading).toBeInTheDocument()
    const bar = heading.parentElement?.querySelector('.h-1')
    expect(bar).toHaveClass('bg-brand')
  })

  it('lists four service cards with the reference titles', () => {
    render(<Services />)

    const cards = screen.getAllByRole('heading', { level: 3 })
    expect(cards).toHaveLength(4)
    for (const title of serviceTitles) {
      expect(screen.getAllByRole('heading', { level: 3, name: title }).length).toBeGreaterThan(0)
    }
  })

  it('shows an image and a description in each card', () => {
    const { container } = render(<Services />)

    expect(container.querySelectorAll('img')).toHaveLength(4)
    expect(screen.getAllByText(/exfoliating/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/kneading/i).length).toBeGreaterThan(0)
  })
})
