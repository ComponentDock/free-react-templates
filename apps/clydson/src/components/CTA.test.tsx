import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import CTA from './CTA'

describe('CTA', () => {
  it('renders heading and contact button', () => {
    render(<CTA />)
    expect(screen.getByText('Have a project on your mind.')).toBeInTheDocument()
    expect(screen.getByText('Contact me')).toBeInTheDocument()
  })
})
