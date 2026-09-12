import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Our Capturing Market Sectors',
    )
  })

  it('renders three service cards', () => {
    render(<Services />)
    expect(screen.getByText('Automotive Engineering')).toBeInTheDocument()
    expect(screen.getByText('Construction & Engineering')).toBeInTheDocument()
    expect(screen.getByText('Industrial Engineering')).toBeInTheDocument()
  })

  it('renders service images with alt text', () => {
    render(<Services />)
    expect(screen.getByAltText('Automotive Engineering')).toBeInTheDocument()
    expect(screen.getByAltText('Construction & Engineering')).toBeInTheDocument()
    expect(screen.getByAltText('Industrial Engineering')).toBeInTheDocument()
  })
})
