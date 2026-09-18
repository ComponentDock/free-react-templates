import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Intro } from './Intro'

describe('Intro', () => {
  it('renders the introductory paragraph', () => {
    render(<Intro />)
    expect(screen.getByText(/this is a free creative portfolio template/i)).toBeInTheDocument()
  })

  it('has descriptive text content', () => {
    render(<Intro />)
    expect(screen.getByText(/portfolio/i)).toBeInTheDocument()
  })
})
