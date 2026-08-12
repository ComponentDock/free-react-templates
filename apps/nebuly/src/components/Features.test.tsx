import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the heading and five bordered feature cards', () => {
    render(<Features />)
    expect(
      screen.getByRole('heading', { name: 'What Our Software Can Do For You' }),
    ).toBeInTheDocument()
    for (const title of [
      'Responsive Design',
      'Android Apps Development',
      'iOS Apps Development',
      'UX/UI Design',
      'Print Ready Design',
    ]) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
  })
})
