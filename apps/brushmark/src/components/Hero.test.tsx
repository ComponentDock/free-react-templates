import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders greeting and heading', () => {
    render(<Hero />)
    expect(screen.getByText('Hey There!')).toBeInTheDocument()
    expect(screen.getByText(/I Am Jo/)).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<Hero />)
    expect(screen.getByText('See My Work')).toBeInTheDocument()
  })

  it('renders social icons', () => {
    render(<Hero />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Skype')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })

  it('renders hero image with alt text', () => {
    render(<Hero />)
    expect(screen.getByAltText('Creative Art Director portrait')).toBeInTheDocument()
  })

  it('renders role subtitle', () => {
    render(<Hero />)
    expect(screen.getByText(/Creative Art Director/)).toBeInTheDocument()
  })
})
