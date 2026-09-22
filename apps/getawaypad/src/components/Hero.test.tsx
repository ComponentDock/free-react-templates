import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('displays subheading and heading', () => {
    render(<Hero />)
    expect(screen.getByText('Welcome to GetawayPad')).toBeInTheDocument()
    expect(screen.getByText(/Rent an apartment for your vacation/)).toBeInTheDocument()
  })

  it('renders Learn more and Contact us buttons', () => {
    render(<Hero />)
    expect(screen.getByText('Learn more')).toBeInTheDocument()
    expect(screen.getByText('Contact us')).toBeInTheDocument()
  })
})
