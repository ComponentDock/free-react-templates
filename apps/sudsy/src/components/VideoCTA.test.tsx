import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { VideoCTA } from './VideoCTA'

describe('VideoCTA', () => {
  it('renders the CTA heading', () => {
    render(<VideoCTA />)
    expect(
      screen.getByRole('heading', { name: /car will look as your new one/i }),
    ).toBeInTheDocument()
  })

  it('shows a descriptive paragraph', () => {
    render(<VideoCTA />)
    expect(screen.getByText(/showroom shine/i)).toBeInTheDocument()
  })

  it('has a background image', () => {
    render(<VideoCTA />)
    const img = screen.getByRole('img', { name: /car after professional wash/i })
    expect(img).toBeInTheDocument()
  })
})
