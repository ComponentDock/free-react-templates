import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'
import { services, servicesHeading } from '../data'

describe('Services', () => {
  it('renders the centered heading', () => {
    render(<Services />)

    expect(screen.getByRole('heading', { level: 2, name: servicesHeading })).toBeInTheDocument()
  })

  it('renders four feature cards with titles and blurbs', () => {
    render(<Services />)

    expect(services).toHaveLength(4)
    // All four cards share the same title/blurb (faithful to the source).
    const headings = screen.getAllByRole('heading', { level: 4, name: services[0]!.title })
    expect(headings).toHaveLength(4)
    expect(screen.getAllByText(services[0]!.blurb)).toHaveLength(4)
  })
})
