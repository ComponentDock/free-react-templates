import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the subtitle, heading, and two feature cards', () => {
    render(<Features />)

    expect(screen.getByText('About us')).toBeInTheDocument()
    expect(screen.getByText('Creativity')).toBeInTheDocument()
    expect(screen.getByText('Solutions')).toBeInTheDocument()
  })

  it('has icon containers for each feature', () => {
    render(<Features />)

    // Each feature card has an SVG icon (lucide renders as SVG)
    const svgs = document.querySelectorAll('svg[aria-hidden="true"]')
    expect(svgs.length).toBeGreaterThanOrEqual(2)
  })
})
