import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeatureBar } from './FeatureBar'

describe('FeatureBar', () => {
  it('renders all four feature items', () => {
    render(<FeatureBar />)
    expect(screen.getByText('Campus Life')).toBeInTheDocument()
    expect(screen.getByText('Graduation')).toBeInTheDocument()
    expect(screen.getByText('Athletics')).toBeInTheDocument()
    expect(screen.getByText('Community')).toBeInTheDocument()
  })

  it('renders four icons', () => {
    const { container } = render(<FeatureBar />)
    const svgs = container.querySelectorAll('svg')
    expect(svgs.length).toBe(4)
  })

  it('has a white background', () => {
    const { container } = render(<FeatureBar />)
    const section = container.querySelector('section')
    expect(section).toHaveClass('bg-white')
  })
})
