import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Banner } from './Banner'

describe('Banner', () => {
  it('renders the hero heading', () => {
    render(<Banner />)
    expect(
      screen.getByRole('heading', { name: /Digital and innovative idea/i }),
    ).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<Banner />)
    expect(screen.getByText('We are digital agency')).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<Banner />)
    expect(screen.getByText('Explore Work')).toBeInTheDocument()
  })
})
