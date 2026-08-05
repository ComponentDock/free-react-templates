import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Opportunity } from './Opportunity'

describe('Opportunity', () => {
  it('renders the reversed split section heading, blurb, image, and learn-more link', () => {
    render(<Opportunity />)

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'With efficiency to unlock more opportunities',
      }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /learn more/i })).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: 'Ecobit analytics showing unlocked opportunities' }),
    ).toBeInTheDocument()
  })
})
