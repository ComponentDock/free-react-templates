import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)

    expect(screen.getAllByRole('link', { name: 'Hardhat' }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Our Services' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Who we are' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Our Projects' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: "Let's talk with us" })).toBeInTheDocument()
    expect(screen.getByText('34')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Our team' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Testimonial' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Latest News' })).toBeInTheDocument()
  })
})
