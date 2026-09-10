import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Banner } from './Banner'

describe('Banner', () => {
  it('renders headline with Lead from', () => {
    render(<Banner />)
    expect(screen.getByRole('heading', { level: 1, name: /lead from/i })).toBeInTheDocument()
  })

  it('renders Learn More gradient button', () => {
    render(<Banner />)
    expect(screen.getByRole('link', { name: /learn more/i })).toBeInTheDocument()
  })

  it('renders Intro Video link', () => {
    render(<Banner />)
    expect(screen.getByText('Intro Video')).toBeInTheDocument()
  })

  it('renders decorative blob elements', () => {
    const { container } = render(<Banner />)
    const blobs = container.querySelectorAll('.animate-pulse')
    expect(blobs.length).toBeGreaterThanOrEqual(4)
  })

  it('renders hero image', () => {
    render(<Banner />)
    expect(screen.getByAltText(/business consulting/i)).toBeInTheDocument()
  })
})
