import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('composes every section of the landing page in order', () => {
    render(<App />)

    expect(screen.getByRole('link', { name: /Kinesis Crossfit/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: 'Shape Your Perfect Body' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Information About Us')).toBeInTheDocument()
    expect(screen.getByText('12k+')).toBeInTheDocument()
    expect(screen.getByText('Join Us Now')).toBeInTheDocument()
    expect(screen.getByText('Tons of Cardio & Strength')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /Kinesis Workout Classes/ }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /Pricing & Packages/ }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /Members Success Stories/ }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /Fitness Schedules/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /Fitness Trainer/ })).toBeInTheDocument()
    expect(screen.getByText('Roger Scott')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /Recent Blog/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /What is Your BMI/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )

    const sections = screen.getAllByRole('heading', { level: 2 })
    expect(sections.length).toBeGreaterThan(10)
  })
})
