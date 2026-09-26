import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders profile photo, name, title, and bio', () => {
    render(<Hero />)
    expect(screen.getByAltText('Profile photo')).toBeInTheDocument()
    expect(screen.getByText('Donald McKinney')).toBeInTheDocument()
    expect(screen.getByText('Junior UI/UX Developer')).toBeInTheDocument()
    expect(screen.getByText(/Hello Everybody, I am/)).toBeInTheDocument()
  })

  it('renders contact info items', () => {
    render(<Hero />)
    expect(screen.getByText('31st December, 1992')).toBeInTheDocument()
    expect(screen.getByText('44 (012) 695 4783')).toBeInTheDocument()
    expect(screen.getByText('businessplan@donald')).toBeInTheDocument()
    expect(screen.getByText('Santa Monica Boulevard')).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(<Hero />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
  })
})
