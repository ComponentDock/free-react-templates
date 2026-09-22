import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading and subtitle', () => {
    render(<Hero />)
    expect(screen.getByText("Hi, I'm Justly")).toBeInTheDocument()
    expect(screen.getByText('Fitness Coach')).toBeInTheDocument()
  })

  it('renders My Courses button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /my courses/i })).toHaveAttribute('href', '#courses')
  })
})
