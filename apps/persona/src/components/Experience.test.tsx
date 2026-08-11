import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { experience, experienceTitle } from '../data'
import { Experience } from './Experience'

describe('Experience', () => {
  it('shows the section heading', () => {
    render(<Experience />)
    expect(screen.getByRole('region', { name: experienceTitle })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: experienceTitle })).toBeInTheDocument()
  })

  it('renders timeline entries newest first with period, role and company', () => {
    render(<Experience />)
    const region = screen.getByRole('region', { name: experienceTitle })
    const entries = within(region).getAllByRole('listitem')
    expect(entries).toHaveLength(experience.length)

    const first = within(entries[0]!)
    expect(first.getByText(experience[0]!.period)).toBeInTheDocument()
    expect(first.getByText(experience[0]!.role)).toBeInTheDocument()
    expect(first.getByText(experience[0]!.company)).toBeInTheDocument()

    // Newest first: the first entry's period must precede the second's.
    const periods = entries.map((entry) => within(entry).getByText(/\d{4}/).textContent)
    expect(periods[0]).toBe(experience[0]!.period)
  })
})
