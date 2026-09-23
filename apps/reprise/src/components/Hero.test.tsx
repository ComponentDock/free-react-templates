import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline with love icon', () => {
    render(<Hero />)
    expect(screen.getByText(/Handpicked/)).toBeInTheDocument()
    expect(screen.getByText(/design resources/)).toBeInTheDocument()
    expect(screen.getByText(/care for every detail/)).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<Hero />)
    expect(screen.getByText('free downloads only on fridays')).toBeInTheDocument()
  })
})
