import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders all six project cards', () => {
    render(<Projects />)
    expect(screen.getByText('Garden Landscaping')).toBeInTheDocument()
    expect(screen.getByText('Plantation Work')).toBeInTheDocument()
    expect(screen.getByText('Watering Service')).toBeInTheDocument()
    expect(screen.getByText('Lawn Trimming')).toBeInTheDocument()
    expect(screen.getByText('Nursery Management')).toBeInTheDocument()
    expect(screen.getByText('Plant Arrangement')).toBeInTheDocument()
  })

  it('renders project images', () => {
    render(<Projects />)
    const imgs = screen.getAllByRole('img')
    expect(imgs.length).toBe(6)
  })

  it('shows overlay on hover and hides on leave', () => {
    render(<Projects />)
    const card = screen.getByText('Garden Landscaping').closest('[class*="group"]')!
    fireEvent.mouseEnter(card)
    expect(screen.getByText('Garden Landscaping')).toBeInTheDocument()
    fireEvent.mouseLeave(card)
    expect(screen.getByText('Garden Landscaping')).toBeInTheDocument()
  })
})
