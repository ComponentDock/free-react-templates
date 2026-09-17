import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Intro } from './Intro'

describe('Intro', () => {
  it('renders the heading', () => {
    render(<Intro />)
    expect(screen.getByRole('heading', { name: /best marketing conference/i })).toBeInTheDocument()
  })

  it('renders descriptive text', () => {
    render(<Intro />)
    expect(screen.getByText(/join industry leaders/i)).toBeInTheDocument()
  })

  it('renders a Get Tickets link', () => {
    render(<Intro />)
    expect(screen.getByText('Get Tickets')).toBeInTheDocument()
  })
})
