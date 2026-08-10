import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the teaser heading and the main services heading', () => {
    render(<Services />)
    expect(
      screen.getByRole('heading', { level: 3, name: 'We make any idea and wish come true' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: 'We arrange the perfect weddings' }),
    ).toBeInTheDocument()
  })

  it('renders service cards with titles', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: 'Wedding Planning' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Event Styling' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Photography' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Music & Dance' })).toBeInTheDocument()
  })
})
