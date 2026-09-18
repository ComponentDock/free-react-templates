import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeatureStrip } from './FeatureStrip'

describe('FeatureStrip', () => {
  it('renders three feature items', () => {
    render(<FeatureStrip />)
    expect(screen.getByText('Independent Living')).toBeInTheDocument()
    expect(screen.getByText('Senior Care')).toBeInTheDocument()
    expect(screen.getByText('Patient Care')).toBeInTheDocument()
  })

  it('renders "Try Our Services" subtitle for each', () => {
    render(<FeatureStrip />)
    const subtitles = screen.getAllByText('Try Our Services')
    expect(subtitles).toHaveLength(3)
  })

  it('renders Learn More links', () => {
    render(<FeatureStrip />)
    const links = screen.getAllByText('Learn More')
    expect(links).toHaveLength(3)
  })

  it('has a light background section', () => {
    const { container } = render(<FeatureStrip />)
    expect(container.firstElementChild).toHaveClass('bg-paper')
  })
})
