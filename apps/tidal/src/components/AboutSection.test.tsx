import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AboutSection } from './AboutSection'

describe('AboutSection', () => {
  it('renders the about heading and content', () => {
    render(<AboutSection />)

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Make Your Tour Memorable and Safe With Us',
      }),
    ).toBeInTheDocument()

    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument()
    expect(screen.getByText(/Excepteur sint occaecat/)).toBeInTheDocument()
  })
})
