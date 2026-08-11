import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PropertyInformation } from './PropertyInformation'
import { PROPERTY_BLURB, PROPERTY_CTA, PROPERTY_DETAILS, PROPERTY_HEADING } from '../data'

describe('PropertyInformation', () => {
  it('renders a white split panel overlapping the hero by 100px with a soft shadow', () => {
    const { container } = render(<PropertyInformation />)

    const section = container.querySelector('section') as HTMLElement
    expect(section.className).toMatch(/-mt-\[100px\]/)
    expect(section.className).toMatch(/bg-white/)
    expect(section.className).toMatch(/shadow/)
    expect(container.querySelector('img')).toHaveAttribute(
      'src',
      expect.stringContaining('dwell-property'),
    )
  })

  it('renders the heading, blurb, spec list with black values and Get Details CTA', () => {
    render(<PropertyInformation />)

    expect(screen.getByRole('heading', { name: PROPERTY_HEADING })).toBeInTheDocument()
    expect(screen.getByText(PROPERTY_BLURB)).toBeInTheDocument()

    for (const row of PROPERTY_DETAILS) {
      // Label is a direct text node ("Property Name: ") split from the
      // <strong> value — match with a prefix regex.
      expect(screen.getByText(new RegExp(`^${row.label}:`))).toBeInTheDocument()
      expect(screen.getByText(row.value)).toBeInTheDocument()
    }

    const cta = screen.getByRole('link', { name: PROPERTY_CTA })
    expect(cta.className).toMatch(/bg-brand/)
    expect(cta.className).toMatch(/rounded-none/)
  })
})
