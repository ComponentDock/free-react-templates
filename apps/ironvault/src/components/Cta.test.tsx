import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Cta } from './Cta'

describe('Cta', () => {
  it('renders the experience stat card', () => {
    render(<Cta />)

    expect(screen.getByText('08')).toBeInTheDocument()
    expect(screen.getByText('Years Expesience')).toBeInTheDocument()
    expect(screen.getByText('Hire me to get the best')).toBeInTheDocument()
  })

  it('renders the workout question and the hire-me button', () => {
    render(<Cta />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Want to start your next workout with me?' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'hire me' })).toHaveAttribute('href', '#contact')
  })
})
