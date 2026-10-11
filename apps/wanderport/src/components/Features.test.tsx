import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

const TITLES = [
  'Easy Flight Search',
  'Get Hotel Offers',
  'Holiday Packages',
  'Dedicated Support',
] as const

describe('Features', () => {
  it('renders the four icon cards in the reference order', () => {
    render(<Features />)

    const headings = screen.getAllByRole('heading', { level: 4 })
    expect(headings.map((heading) => heading.textContent)).toEqual([...TITLES])

    for (const title of TITLES) {
      expect(screen.getByRole('heading', { name: title }).className).toContain('text-[18px]')
    }
  })

  it('gives every card the gradient icon hover and an outlined detail link', () => {
    render(<Features />)

    const section = screen.getByRole('region', { name: 'Why book with us' })
    expect(section.className).toContain('section-gap')

    const icons = section.querySelectorAll('svg')
    expect(icons).toHaveLength(5)
    const icon = icons[1]!
    expect(icon.className.baseVal).toContain('group-hover:[stroke:url(#wanderport-icon-gradient)]')

    const links = screen.getAllByRole('link', { name: 'View Details' })
    expect(links).toHaveLength(4)
    for (const link of links) {
      expect(link).toHaveAttribute('href', '#package')
      expect(link.className).toContain('rounded-[20px]')
    }
  })
})
