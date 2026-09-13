import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Cta } from './Cta'

describe('Cta', () => {
  it('renders the heading', () => {
    render(<Cta />)
    expect(screen.getByText('Got Impressed to our features')).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<Cta />)
    expect(screen.getByText('Get a free Quote')).toBeInTheDocument()
  })
})
