import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('renders the four service cards with titles and blurbs', () => {
    render(<Services />)

    for (const title of [
      'Nutrition Strategies',
      'Workout Routines',
      'Support Motivation',
      'First Hand Advice',
    ]) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
    // Icons are decorative (aria-hidden), blurbs render as paragraphs.
    expect(screen.getByText(/Personal meal plans/)).toBeInTheDocument()
    expect(screen.getByText(/Structured training programs/)).toBeInTheDocument()
  })

  it('renders the certified counter card with 24 years of experience', () => {
    render(<Services />)

    expect(screen.getByRole('heading', { name: 'Certified Company' })).toBeInTheDocument()
    expect(screen.getByText('24')).toBeInTheDocument()
    expect(screen.getByText('Years of experienced')).toBeInTheDocument()
  })
})
