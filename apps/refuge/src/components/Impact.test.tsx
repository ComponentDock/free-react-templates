import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Impact } from './Impact'

describe('Impact', () => {
  it('renders heading and CTA button', () => {
    render(<Impact />)
    expect(screen.getByText('Thousands of Houses Damage Each Year')).toBeInTheDocument()
    expect(screen.getByText('Insure Yours Now')).toBeInTheDocument()
  })

  it('renders descriptive text', () => {
    render(<Impact />)
    expect(screen.getByText(/Natural disasters/)).toBeInTheDocument()
  })
})
