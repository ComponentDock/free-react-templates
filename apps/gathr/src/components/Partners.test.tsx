import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Partners } from './Partners'

describe('Partners', () => {
  it('renders the heading', () => {
    render(<Partners />)
    expect(screen.getByText('Our Partners')).toBeInTheDocument()
  })

  it('renders all 5 partner placeholders', () => {
    render(<Partners />)
    for (let i = 1; i <= 5; i++) {
      expect(screen.getByText(`Partner ${i}`)).toBeInTheDocument()
    }
  })

  it('has a section landmark', () => {
    render(<Partners />)
    expect(document.querySelector('section')).toBeInTheDocument()
  })

  it('has proper heading level', () => {
    render(<Partners />)
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
  })
})
