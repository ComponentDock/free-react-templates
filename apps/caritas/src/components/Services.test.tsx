import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'
import { SERVICES, SERVICES_TITLE } from '../data'

describe('Services', () => {
  it('renders the section title and 4 icon boxes in a 2x2 grid', () => {
    const { container } = render(<Services />)

    expect(screen.getByRole('region', { name: 'Services' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: new RegExp(SERVICES_TITLE) }),
    ).toBeInTheDocument()

    // 4 service boxes, one heading each (two share the "Donation" title).
    expect(container.querySelectorAll('section[aria-label="Services"] h3')).toHaveLength(4)

    // Every service renders its title, blurb and text link.
    for (const service of SERVICES) {
      expect(screen.getAllByText(new RegExp(service.title))[0]).toBeInTheDocument()
      expect(screen.getByText(service.blurb)).toBeInTheDocument()
      expect(
        screen.getAllByRole('link', { name: new RegExp(service.linkLabel) }).length,
      ).toBeGreaterThan(0)
    }
  })
})
