import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading and script text', () => {
    render(<Hero />)
    expect(screen.getByText(/vibrance design/i)).toBeInTheDocument()
    expect(screen.getByText('Studio')).toBeInTheDocument()
  })

  it('renders pre-heading and CTA button', () => {
    render(<Hero />)
    expect(screen.getByText(/get your free template now/i)).toBeInTheDocument()
    expect(screen.getByText(/discover it/i)).toBeInTheDocument()
  })

  it('has a scroll down link', () => {
    render(<Hero />)
    expect(screen.getByText(/scroll down/i)).toHaveAttribute('href', '#social')
  })
})
