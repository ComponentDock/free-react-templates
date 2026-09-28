import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeatureStory } from './FeatureStory'

describe('FeatureStory', () => {
  it('renders the section heading', () => {
    render(<FeatureStory />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Honey Chocolate Pie')
  })

  it('renders the signature dessert label', () => {
    render(<FeatureStory />)
    expect(screen.getByText('Our Signature Dessert')).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<FeatureStory />)
    expect(screen.getByText(/Indulge in our most beloved creation/)).toBeInTheDocument()
  })

  it('renders the Order Now button', () => {
    render(<FeatureStory />)
    expect(screen.getByText('Order Now')).toBeInTheDocument()
  })

  it('renders the image', () => {
    render(<FeatureStory />)
    expect(screen.getByRole('img', { name: /honey chocolate pie/i })).toBeInTheDocument()
  })
})
