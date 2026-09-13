import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders hero heading and search inputs', () => {
    render(<Hero />)
    expect(screen.getByText('Largest Job Site In The World')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Job title, keywords...')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('City, state...')).toBeInTheDocument()
    expect(screen.getByText('Search')).toBeInTheDocument()
  })
})
