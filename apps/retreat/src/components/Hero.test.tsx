import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows the heading', () => {
    render(<Hero />)
    expect(screen.getByText('Welcome To Retreat')).toBeInTheDocument()
  })

  it('shows the subtitle', () => {
    render(<Hero />)
    expect(screen.getByText('Hotel & Resort')).toBeInTheDocument()
  })

  it('shows the CTA button', () => {
    render(<Hero />)
    expect(screen.getByText('Discover Now')).toBeInTheDocument()
  })
})
