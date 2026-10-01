import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MobileApp } from './MobileApp'

describe('MobileApp', () => {
  it('renders the promo headline and subtitle', () => {
    render(<MobileApp />)
    expect(
      screen.getByRole('heading', { level: 2, name: /save 30% with the app/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/book a car in 60 seconds/i)).toBeInTheDocument()
  })

  it('renders both store download buttons', () => {
    render(<MobileApp />)
    expect(screen.getByRole('link', { name: /android store/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /apple store/i })).toBeInTheDocument()
  })
})
