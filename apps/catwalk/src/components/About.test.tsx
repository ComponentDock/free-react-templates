import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the eyebrow, the heading, and the three feature items', () => {
    render(<About />)
    expect(screen.getByText('Welcome to Catwalk')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'We Are Model Agency' })).toBeInTheDocument()
    for (const feature of ['Fashion Shows', 'Photosessions', 'Model Video']) {
      const heading = screen.getByRole('heading', { name: feature })
      expect(heading).toBeInTheDocument()
      expect(heading.closest('li')!.querySelector('svg')).toBeInTheDocument()
    }
  })
})
