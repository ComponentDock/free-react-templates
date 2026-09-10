import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { VideoCta } from './VideoCta'

describe('VideoCta', () => {
  it('renders the heading, subtitle, and play button', () => {
    render(<VideoCta />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Being unique is the preference' }),
    ).toBeInTheDocument()

    expect(screen.getByText(/We bring a fresh perspective/)).toBeInTheDocument()

    expect(screen.getByRole('button', { name: 'Play video' })).toBeInTheDocument()
  })
})
