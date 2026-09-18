import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import { describe, expect, it } from 'vitest'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'A Clean Home is A Happy Home',
    )
  })

  it('renders the subheading', () => {
    render(<Hero />)
    expect(screen.getByText('Introducing Sweeply')).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: 'Request A Quote' })).toBeInTheDocument()
  })
})
