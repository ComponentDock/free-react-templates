import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the stacked headline', () => {
    render(<Hero />)
    expect(screen.getByText('Cirrus,')).toBeInTheDocument()
    expect(screen.getByText('Cloud,')).toBeInTheDocument()
    expect(screen.getByText('Management')).toBeInTheDocument()
  })

  it('renders the subheading', () => {
    render(<Hero />)
    expect(screen.getByText('Cloud Management')).toBeInTheDocument()
  })

  it('renders the description paragraph', () => {
    render(<Hero />)
    expect(screen.getByText(/behind the word mountains/)).toBeInTheDocument()
  })

  it('renders the Get in touch CTA', () => {
    render(<Hero />)
    expect(screen.getByText('Get in touch')).toBeInTheDocument()
  })

  it('renders the hero illustration', () => {
    render(<Hero />)
    expect(screen.getByAltText('Cloud management illustration')).toBeInTheDocument()
  })
})
