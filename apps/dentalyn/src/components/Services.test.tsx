import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('lists all six service types', () => {
    render(<Services />)

    expect(screen.getByRole('heading', { name: 'Our Services' })).toBeInTheDocument()
    for (const name of [
      'Teeth Whitening',
      'Missing Teeth',
      'Cosmetic Dentistry',
      'Examination',
      'Teeth Pain',
      'Root Canal',
    ]) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
  })

  it('has a video play button', () => {
    render(<Services />)

    expect(screen.getByRole('link', { name: 'Play video' })).toBeInTheDocument()
  })
})
