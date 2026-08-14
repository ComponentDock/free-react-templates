import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading and the three service cards', () => {
    render(<Services />)

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'What Services you will Get from me!',
      }),
    ).toBeInTheDocument()

    for (const title of ['UI/UX Design', 'Digital Marketing', 'Website Design']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
      expect(screen.getByText(new RegExp(title, 'i'))).toBeInTheDocument()
    }
    // three circular icon tiles
    expect(screen.getByText(/wireframes, prototypes, and pixel-perfect/i)).toBeInTheDocument()
    expect(screen.getByText(/landing pages and campaigns that convert/i)).toBeInTheDocument()
    expect(screen.getByText(/fast, responsive, accessible websites/i)).toBeInTheDocument()
  })
})
