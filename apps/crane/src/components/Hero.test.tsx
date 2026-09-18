import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading text', () => {
    render(<Hero />)
    expect(screen.getByText(/We Build Your Home/)).toBeInTheDocument()
  })

  it('renders Our Services button', () => {
    render(<Hero />)
    expect(screen.getByText('Our Services')).toBeInTheDocument()
  })

  it('renders subtext', () => {
    render(<Hero />)
    expect(screen.getByText(/Build Your Home Secure and Safe/)).toBeInTheDocument()
  })
})
