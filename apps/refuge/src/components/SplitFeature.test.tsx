import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { SplitFeature } from './SplitFeature'

describe('SplitFeature', () => {
  it('renders left layout with heading and caption', () => {
    render(<SplitFeature side="left" />)
    expect(screen.getByText('Outstanding Services')).toBeInTheDocument()
    expect(screen.getByText('Why Choose Us')).toBeInTheDocument()
  })

  it('renders right layout with heading and caption', () => {
    render(<SplitFeature side="right" />)
    expect(screen.getByText('Outstanding Services')).toBeInTheDocument()
    expect(screen.getByText('Why Choose Us')).toBeInTheDocument()
  })

  it('renders descriptive text for left layout', () => {
    render(<SplitFeature side="left" />)
    expect(screen.getByText(/tailored insurance solutions/)).toBeInTheDocument()
  })

  it('renders descriptive text for right layout', () => {
    render(<SplitFeature side="right" />)
    expect(screen.getByText(/commitment to customer satisfaction/)).toBeInTheDocument()
  })
})
