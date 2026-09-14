import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Intro } from './Intro'

describe('Intro', () => {
  it('renders heading with Vibrance', () => {
    render(<Intro />)
    expect(screen.getByText(/is perfect for you/i)).toBeInTheDocument()
    expect(screen.getByText('Vibrance')).toBeInTheDocument()
  })

  it('renders description paragraph', () => {
    render(<Intro />)
    expect(screen.getByText(/class aptent taciti/i)).toBeInTheDocument()
  })

  it('renders discover it button', () => {
    render(<Intro />)
    expect(screen.getByText(/discover it/i)).toBeInTheDocument()
  })

  it('renders the intro image', () => {
    render(<Intro />)
    expect(screen.getByAltText('Studio work')).toBeInTheDocument()
  })
})
