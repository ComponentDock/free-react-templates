import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the about heading', () => {
    render(<About />)

    expect(
      screen.getByRole('heading', { level: 2, name: /second abundantly/i }),
    ).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<About />)

    expect(screen.getByRole('img', { name: /about carepath/i })).toBeInTheDocument()
  })

  it('renders the learn more link', () => {
    render(<About />)

    expect(screen.getByRole('link', { name: /learn more/i })).toBeInTheDocument()
  })
})
