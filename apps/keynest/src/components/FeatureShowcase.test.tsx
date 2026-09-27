import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeatureShowcase } from './FeatureShowcase'

describe('FeatureShowcase', () => {
  it('renders the heading', () => {
    render(<FeatureShowcase />)
    expect(screen.getByText(/Just browse away/)).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<FeatureShowcase />)
    const texts = screen.getAllByText(/Rhoncus est pellentesque/)
    expect(texts.length).toBeGreaterThanOrEqual(1)
  })

  it('renders the Browse Property button', () => {
    render(<FeatureShowcase />)
    expect(screen.getByText('Browse Property')).toBeInTheDocument()
  })

  it('renders the feature image', () => {
    render(<FeatureShowcase />)
    const img = screen.getByAltText('Featured property showcase')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
