import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Intro } from './Intro'

describe('Intro', () => {
  it('renders the headline', () => {
    render(<Intro />)
    expect(screen.getByText(/I'm a freelance/)).toBeInTheDocument()
  })

  it('renders the highlighted span', () => {
    render(<Intro />)
    expect(screen.getByText('digital designer')).toBeInTheDocument()
  })

  it('renders the experience text', () => {
    render(<Intro />)
    expect(screen.getByText(/\+10 years of experience/)).toBeInTheDocument()
  })
})
