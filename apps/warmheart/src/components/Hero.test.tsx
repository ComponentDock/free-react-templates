import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline', () => {
    render(<Hero />)
    expect(screen.getByText('Help for Victims Affected by Flood')).toBeInTheDocument()
  })

  it('renders the subheading', () => {
    render(<Hero />)
    expect(screen.getByText('We Need Your Help to Serve the People')).toBeInTheDocument()
  })

  it('renders two CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByText('Donate Now')).toHaveAttribute('href', '#donate')
    expect(screen.getByText('View Activity')).toHaveAttribute('href', '#causes')
  })

  it('renders three stat boxes', () => {
    render(<Hero />)
    expect(screen.getByText('Total Donation')).toBeInTheDocument()
    expect(screen.getByText('$2.5M')).toBeInTheDocument()
    expect(screen.getByText('Total Volunteers')).toBeInTheDocument()
    expect(screen.getByText('3,268')).toBeInTheDocument()
    expect(screen.getByText('Future Plans')).toBeInTheDocument()
    expect(screen.getByText('$7.5M')).toBeInTheDocument()
  })
})
