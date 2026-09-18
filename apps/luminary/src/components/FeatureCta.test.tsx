import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeatureCta } from './FeatureCta'

describe('FeatureCta', () => {
  it('renders the heading', () => {
    render(<FeatureCta />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Help Us by Sharing Our Works',
    )
  })

  it('renders descriptive text', () => {
    render(<FeatureCta />)
    expect(screen.getByText(/Sed ut perspiciatis/)).toBeInTheDocument()
  })

  it('renders author attribution', () => {
    render(<FeatureCta />)
    expect(screen.getByText(/Carl Anderson/)).toBeInTheDocument()
    expect(screen.getByText(/Co-Founder/)).toBeInTheDocument()
  })

  it('renders the featured image', () => {
    render(<FeatureCta />)
    const img = screen.getByAltText('Featured content')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('luminary-feature'))
  })

  it('has light background', () => {
    render(<FeatureCta />)
    const section = screen.getByRole('heading', { level: 2 }).closest('section')
    expect(section).toHaveClass('bg-light-bg')
  })
})
