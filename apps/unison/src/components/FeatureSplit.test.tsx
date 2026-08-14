import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { FeatureSplit } from './FeatureSplit'

describe('FeatureSplit', () => {
  it('renders the two icon feature boxes with Learn More links', () => {
    render(<FeatureSplit />)
    expect(screen.getByRole('heading', { name: 'Web & Mobile Specialties' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Intuitive Thinkers' })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /Learn More/ })).toHaveLength(2)
  })

  it('renders the rounded photo on the right', () => {
    render(<FeatureSplit />)
    const image = screen.getByAltText('Unison product team collaborating')
    expect(image).toHaveAttribute('src', expect.stringContaining('unison-feature'))
    expect(image).toHaveClass('rounded-lg')
  })
})
