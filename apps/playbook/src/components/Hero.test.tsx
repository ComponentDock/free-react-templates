import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline', () => {
    render(<Hero />)
    expect(screen.getByText(/We are Playbook/)).toBeInTheDocument()
  })

  it('renders the scroll-down arrow', () => {
    render(<Hero />)
    expect(screen.getByLabelText('Scroll down')).toBeInTheDocument()
  })

  it('scroll-down links to the work section', () => {
    render(<Hero />)
    const link = screen.getByLabelText('Scroll down')
    expect(link).toHaveAttribute('href', '#work')
  })
})
