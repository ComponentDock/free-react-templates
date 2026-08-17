import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { About } from './About'

describe('About (guide variant)', () => {
  it('renders the photo, 99% badge, heading, and three icon rows', () => {
    render(<About variant="guide" />)

    expect(
      screen.getByRole('heading', {
        name: 'We guide projects and organizations in making the right decisions.',
      }),
    ).toBeInTheDocument()
    expect(screen.getByText('99%')).toBeInTheDocument()
    expect(screen.getByText('Customer Satisfaction')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'What are my options and the cost to exercise?' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: 'I own my shares — can I get liquidity now without selling?',
      }),
    ).toBeInTheDocument()
    expect(screen.getByAltText('Happy homeowner planning her budget')).toBeInTheDocument()
  })
})

describe('About (steps variant)', () => {
  it('renders the steps heading, three step rows, and a photo on the right', () => {
    render(<About variant="steps" />)

    expect(screen.getByRole('heading', { name: 'Get loan in 3 easy steps' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Check your rate in minutes' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Apply online with confidence' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Get funded fast' })).toBeInTheDocument()
    expect(screen.getByAltText('Celebrating a long-awaited goal')).toBeInTheDocument()
    expect(screen.queryByText('99%')).not.toBeInTheDocument()
  })
})
