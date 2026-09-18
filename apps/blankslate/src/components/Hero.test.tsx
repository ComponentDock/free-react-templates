import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading and subheading', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { name: /We Help to Build You the Product/i }),
    ).toBeInTheDocument()
    expect(screen.getByText('Business Solution')).toBeInTheDocument()
  })

  it('has a call-to-action link', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /Get in touch/i })).toHaveAttribute('href', '#contact')
  })

  it('renders the welcome tagline', () => {
    render(<Hero />)
    expect(screen.getByText('Welcome to BlankSlate')).toBeInTheDocument()
  })
})
