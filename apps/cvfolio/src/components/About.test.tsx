import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the section heading', () => {
    render(<About />)

    expect(screen.getByRole('heading', { name: 'About me' })).toBeInTheDocument()
    expect(screen.getByText('PROFESSIONAL PATH')).toBeInTheDocument()
  })

  it('renders the bio paragraph', () => {
    render(<About />)

    expect(screen.getByText(/passionate and dedicated professional/)).toBeInTheDocument()
  })

  it('renders all four skill labels', () => {
    render(<About />)

    expect(screen.getByText('HTML5 & CSS3')).toBeInTheDocument()
    expect(screen.getByText('Web Design')).toBeInTheDocument()
    expect(screen.getByText('Java')).toBeInTheDocument()
    expect(screen.getByText('PHP')).toBeInTheDocument()
  })

  it('renders all four percentage values', () => {
    render(<About />)

    expect(screen.getAllByText('97%').length).toBe(2)
    expect(screen.getByText('78%')).toBeInTheDocument()
    expect(screen.getByText('67%')).toBeInTheDocument()
  })
})
