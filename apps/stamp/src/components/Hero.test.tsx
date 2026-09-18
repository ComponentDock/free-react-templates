import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline', () => {
    render(<Hero />)
    expect(screen.getByText('Real Solutions!')).toBeInTheDocument()
  })

  it('renders Since 1990', () => {
    render(<Hero />)
    expect(screen.getByText(/Since/)).toBeInTheDocument()
    expect(screen.getByText('1990')).toBeInTheDocument()
  })

  it('renders subtext', () => {
    render(<Hero />)
    expect(screen.getByText('Manufacturing Relationships Distributing Quality')).toBeInTheDocument()
  })

  it('renders the Learn More CTA', () => {
    render(<Hero />)
    expect(screen.getByText('Learn More')).toBeInTheDocument()
  })

  it('CTA links to about section', () => {
    render(<Hero />)
    expect(screen.getByText('Learn More')).toHaveAttribute('href', '#about')
  })
})
