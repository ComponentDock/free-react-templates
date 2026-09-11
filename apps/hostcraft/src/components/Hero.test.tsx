import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading, subheading, and CTA', () => {
    render(<Hero />)
    expect(screen.getByText('Isometric Hosting')).toBeInTheDocument()
    expect(screen.getByText('Design, Development, Hosting')).toBeInTheDocument()
    expect(screen.getByText('Get in touch')).toBeInTheDocument()
  })

  it('renders the illustration image', () => {
    render(<Hero />)
    expect(screen.getByAltText('Isometric hosting illustration')).toBeInTheDocument()
  })
})
