import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SERVICES, SERVICES_COPY } from '../content'
import { Services } from './Services'

describe('Services', () => {
  it('renders six routes with a blurb and a price line each', () => {
    render(<Services />)
    expect(SERVICES).toHaveLength(6)
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(6)
    SERVICES.forEach((service) => {
      expect(screen.getByText(service.title)).toBeInTheDocument()
      expect(screen.getByText(service.blurb)).toBeInTheDocument()
      expect(screen.getByText(service.price)).toBeInTheDocument()
    })
  })

  it('does not promise four routes over six cells', () => {
    render(<Services />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent('Four routes, and two things to do first')
    expect(heading.textContent).toContain(SERVICES_COPY.heading)
  })

  it('draws the rules as a 1 px gap on an ink ground inside a rounded shell', () => {
    render(<Services />)
    const grid = screen.getByText(SERVICES[0]!.title).parentElement!.parentElement as HTMLElement
    expect(grid.className).toContain('gap-px')
    expect(grid.className).toContain('bg-ink-100')
    expect(grid.parentElement?.className).toContain('rounded-2xl')
    expect(grid.parentElement?.className).toContain('overflow-hidden')
  })

  it('pins the price to the bottom of each cell and keeps the sample footnote', () => {
    render(<Services />)
    const cell = screen.getByText(SERVICES[0]!.title).parentElement as HTMLElement
    expect(cell.className).toContain('flex-col')
    expect(screen.getByText(SERVICES[0]!.blurb).className).toContain('flex-1')
    expect(screen.getByText(SERVICES_COPY.footnote)).toBeInTheDocument()
  })
})
