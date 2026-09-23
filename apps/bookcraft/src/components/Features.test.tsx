import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the section heading', () => {
    render(<Features />)
    expect(screen.getByRole('heading', { name: /Features Of This Book/i })).toBeInTheDocument()
  })

  it('renders all six feature cards', () => {
    render(<Features />)
    const headings = [
      'Hard Cover',
      'Paper Back',
      'E-Book',
      'Big Text',
      'Illustrated',
      'Readable Text',
    ]
    for (const name of headings) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
    }
  })
})
