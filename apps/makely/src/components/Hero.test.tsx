import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1, name: /We Love To Build/i })).toBeInTheDocument()
  })

  it('renders the Web Apps text', () => {
    render(<Hero />)
    expect(screen.getByText('Web Apps')).toBeInTheDocument()
  })

  it('renders the subtext', () => {
    render(<Hero />)
    expect(screen.getByText(/creative agency/i)).toBeInTheDocument()
  })

  it('renders Watch Video button', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /Watch Video/i })).toBeInTheDocument()
  })

  it('renders the hero background image', () => {
    render(<Hero />)
    expect(screen.getByRole('img', { name: /Makely hero background/i })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })
})
