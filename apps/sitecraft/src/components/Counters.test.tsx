import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Counters } from './Counters'

describe('Counters', () => {
  it('renders all four counter items', () => {
    render(<Counters />)

    expect(screen.getByText('1,539')).toBeInTheDocument()
    expect(screen.getByText('3,653')).toBeInTheDocument()
    expect(screen.getByText('5,987')).toBeInTheDocument()
    expect(screen.getByText('3,999')).toBeInTheDocument()
  })

  it('displays labels for each counter', () => {
    render(<Counters />)

    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('Employees')).toBeInTheDocument()
    expect(screen.getByText('Constructors')).toBeInTheDocument()
    expect(screen.getByText('Partners')).toBeInTheDocument()
  })

  it('has a parallax background', () => {
    render(<Counters />)

    const section = screen.getByLabelText('Statistics')
    expect(section).toHaveStyle({ backgroundImage: expect.stringContaining('picsum.photos') })
  })

  it('renders four icons', () => {
    const { container } = render(<Counters />)

    const svgs = container.querySelectorAll('svg[aria-hidden="true"]')
    expect(svgs.length).toBe(4)
  })
})
