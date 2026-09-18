import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections with correct headings', () => {
    render(<App />)

    expect(screen.getByText('BodyForge')).toBeInTheDocument()
    expect(screen.getByText('Feel Good')).toBeInTheDocument()
    expect(screen.getByText('Welcome To Our Best Fitness Club')).toBeInTheDocument()
    expect(screen.getByText('Featured Classes')).toBeInTheDocument()
    expect(screen.getByText('Our Service')).toBeInTheDocument()
    expect(screen.getByText('Our Fitness Coaches')).toBeInTheDocument()
    expect(screen.getByText(/25% Discount/)).toBeInTheDocument()
    expect(screen.getByText('Calculate Your BMI')).toBeInTheDocument()
    expect(screen.getByText('Happy Client Says')).toBeInTheDocument()
    expect(screen.getByText('Your Gym')).toBeInTheDocument()
    expect(screen.getAllByText('About Us').length).toBeGreaterThanOrEqual(2)
  })

  it('has a navigation landmark', () => {
    render(<App />)

    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
  })
})
