import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders all 4 feature cards', () => {
    render(<Features />)
    for (const title of [
      'Certificate',
      'Expert Instructors',
      'Learn from Anywhere',
      'Quality Service',
    ]) {
      expect(screen.getByText(title)).toBeInTheDocument()
    }
  })

  it('renders feature descriptions', () => {
    render(<Features />)
    expect(screen.getByText(/Receive a verified certificate/)).toBeInTheDocument()
  })

  it('renders the features section', () => {
    render(<Features />)
    expect(screen.getByText('Certificate')).toBeInTheDocument()
    expect(screen.getByText('Expert Instructors')).toBeInTheDocument()
  })
})
