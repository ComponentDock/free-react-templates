import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /Dialpad/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: /Efficiency Booster/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Online Support' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /Why Choose Us/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /Our Offered Services/i }),
    ).toBeInTheDocument()
    expect(screen.getByText('2,536')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /Some Awesomeness/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /Responsible Customer Support/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /We Believe/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /If you need/i })).toBeInTheDocument()
  })
})
