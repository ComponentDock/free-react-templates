import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WhyUs } from './WhyUs'

describe('WhyUs', () => {
  it('renders the heading and four feature cards', () => {
    render(<WhyUs />)

    expect(screen.getByText('Why Choose Us')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Modern Care You Can Trust' }),
    ).toBeInTheDocument()

    const features = [
      'Advanced Technology',
      'Gentle Approach',
      'Flexible Scheduling',
      'Insurance Friendly',
    ]
    for (const feature of features) {
      expect(screen.getByRole('heading', { level: 3, name: feature })).toBeInTheDocument()
    }

    expect(screen.getByText(/Digital X-rays, 3D imaging, and laser dentistry/)).toBeInTheDocument()
    expect(screen.getByText(/Sedation options and a compassionate team/)).toBeInTheDocument()
  })
})
