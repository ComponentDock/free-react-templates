import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the experience counter and heading', () => {
    render(<About />)
    expect(screen.getByText('42')).toBeInTheDocument()
    expect(screen.getByText(/Years Experience/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Life in Divine Yoga/i })).toBeInTheDocument()
  })

  it('renders the learn more button', () => {
    render(<About />)
    expect(screen.getByRole('button', { name: /learn more/i })).toBeInTheDocument()
  })
})
