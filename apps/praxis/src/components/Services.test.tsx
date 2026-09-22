import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders section heading', () => {
    render(<Services />)
    expect(screen.getByText('What We Offer')).toBeInTheDocument()
    expect(screen.getByText('Our Services')).toBeInTheDocument()
  })

  it('displays all six service cards', () => {
    render(<Services />)
    const titles = [
      'Facial Rejuvenation',
      'Breast Augmentation',
      'Rhinoplasty',
      'Injectable Treatments',
      'Body Contouring',
      'Smile Makeover',
    ]
    for (const title of titles) {
      expect(screen.getByText(title)).toBeInTheDocument()
    }
  })

  it('has a description for each service', () => {
    render(<Services />)
    expect(screen.getByText(/Restore youthful glow/)).toBeInTheDocument()
    expect(screen.getByText(/Enhance your silhouette/)).toBeInTheDocument()
    expect(screen.getByText(/Reshape and refine/)).toBeInTheDocument()
    expect(screen.getByText(/Botox, fillers/)).toBeInTheDocument()
    expect(screen.getByText(/Liposuction and tummy tuck/)).toBeInTheDocument()
    expect(screen.getByText(/Comprehensive dental/)).toBeInTheDocument()
  })
})
