import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Chefs } from './Chefs'
import { CHEFS } from '../data'

describe('Chefs', () => {
  it('renders four staff cards with photos, roles, blurbs and socials', () => {
    const { container } = render(<Chefs />)

    expect(screen.getByRole('heading', { level: 2, name: 'Our Master Chef' })).toBeInTheDocument()
    expect(container.querySelector('.font-script')).toHaveTextContent('Chef')

    const photos = container.querySelectorAll('img')
    expect(photos).toHaveLength(4)
    for (const photo of photos) {
      expect(photo.className).toContain('rounded-[5px]')
      expect(photo.className).toContain('h-[320px]')
    }

    for (const chef of CHEFS) {
      expect(screen.getByRole('heading', { level: 3, name: chef.name })).toBeInTheDocument()
      expect(screen.getByText(chef.blurb)).toBeInTheDocument()
      // Four circular social links per card.
      expect(screen.getAllByRole('link', { name: new RegExp(`${chef.name} on `) })).toHaveLength(4)
    }
    expect(screen.getByText('Restaurant Owner')).toBeInTheDocument()
    expect(screen.getByText('Head Chef')).toBeInTheDocument()
    // Two "Chef" position spans (the aria-hidden script subheading "Chef"
    // is excluded by scoping to plain span text nodes).
    const chefPositions = [...container.querySelectorAll('span')].filter(
      (span) => span.textContent === 'Chef' && !span.className.includes('font-script'),
    )
    expect(chefPositions).toHaveLength(2)

    expect(container.querySelectorAll('svg')).toHaveLength(16)
  })
})
