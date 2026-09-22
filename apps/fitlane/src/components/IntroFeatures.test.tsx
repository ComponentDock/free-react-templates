import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { IntroFeatures } from './IntroFeatures'

describe('IntroFeatures', () => {
  it('renders all three feature boxes', () => {
    render(<IntroFeatures />)
    expect(screen.getByRole('heading', { name: /aerobics program/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /train hard/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /basic program/i })).toBeInTheDocument()
  })

  it('shows descriptive text for each feature', () => {
    render(<IntroFeatures />)
    const descriptions = screen.getAllByText(/aenean auctor|sed porta vel/i)
    expect(descriptions.length).toBeGreaterThanOrEqual(3)
  })
})
