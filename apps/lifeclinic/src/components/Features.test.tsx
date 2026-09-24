import { render, screen } from '@testing-library/react'
import { Features } from './Features'
import { featuresTitle, featuresDescription, featuresLearnMore, featuresImageAlt } from '../data'
import { describe, expect, it } from 'vitest'

describe('Features', () => {
  it('renders the features heading', () => {
    render(<Features />)
    expect(screen.getByRole('heading', { level: 2, name: featuresTitle })).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<Features />)
    expect(screen.getByText(featuresDescription)).toBeInTheDocument()
  })

  it('renders the learn more link', () => {
    render(<Features />)
    expect(screen.getByRole('link', { name: featuresLearnMore })).toBeInTheDocument()
  })

  it('renders the feature image', () => {
    render(<Features />)
    expect(screen.getByAltText(featuresImageAlt)).toBeInTheDocument()
  })
})
