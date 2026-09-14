import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CoreFeatureImage } from './CoreFeatureImage'

describe('CoreFeatureImage', () => {
  it('renders the section', () => {
    render(<CoreFeatureImage />)
    expect(screen.getByRole('region', { name: /core feature image/i })).toBeInTheDocument()
  })

  it('renders the feature image', () => {
    render(<CoreFeatureImage />)
    expect(screen.getByRole('img', { name: /core feature showcase/i })).toBeInTheDocument()
  })

  it('renders the Learn More button', () => {
    render(<CoreFeatureImage />)
    expect(screen.getByRole('link', { name: /learn more/i })).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<CoreFeatureImage className="custom-class" />)
    expect(screen.getByRole('region', { name: /core feature image/i })).toHaveClass('custom-class')
  })
})
