import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Banner } from './Banner'

describe('Banner', () => {
  it('renders headline and CTA button', () => {
    render(<Banner />)
    expect(screen.getByText(/Flat/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Purchase Now/i })).toBeInTheDocument()
  })

  it('renders background image', () => {
    render(<Banner />)
    expect(screen.getByRole('img', { name: /Fashion banner/i })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })
})
