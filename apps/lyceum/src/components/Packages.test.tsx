import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Packages } from './Packages'
import {
  coursePackages,
  joinNowLabel,
  packagesHeading,
  packagesLabel,
  packagesParagraph,
} from '../data'

describe('Packages', () => {
  it('renders the heading column and two pricing cards', () => {
    const { container } = render(<Packages />)

    expect(screen.getByRole('region', { name: packagesLabel })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: packagesHeading })).toBeInTheDocument()
    expect(screen.getByText(packagesParagraph)).toBeInTheDocument()

    for (const pkg of coursePackages) {
      expect(screen.getByRole('heading', { level: 3, name: pkg.title })).toBeInTheDocument()
      expect(screen.getAllByText(pkg.tagline)).toHaveLength(coursePackages.length)
      for (const feature of pkg.features) {
        expect(screen.getAllByText(feature).length).toBeGreaterThan(0)
      }
      expect(screen.getAllByText(pkg.price)).toHaveLength(2)
    }
    // Two pale-green icon circles.
    expect(container.querySelectorAll('.bg-pack-chip')).toHaveLength(2)
  })

  it('hides the price and reveals the Join Now button on hover', () => {
    const { container } = render(<Packages />)

    const prices = container.querySelectorAll('p.text-\\[30px\\]')
    for (const price of prices) {
      expect(price.getAttribute('class')).toContain('group-hover:opacity-0')
    }

    const joinButtons = screen.getAllByRole('link', { name: joinNowLabel })
    expect(joinButtons).toHaveLength(2)
    for (const button of joinButtons) {
      expect(button.getAttribute('class')).toContain('group-hover:opacity-100')
      expect(button.getAttribute('class')).toContain('bg-brand')
      expect(button.getAttribute('class')).toContain('shadow-[0_10px_30px_rgba(0,0,0,0.1)]')
    }
  })
})
