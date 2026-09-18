import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { GymClasses } from './GymClasses'

describe('GymClasses', () => {
  it('renders section heading', () => {
    render(<GymClasses />)
    expect(screen.getByText(/What You Get From/)).toBeDefined()
    expect(screen.getByText(/Vigor/)).toBeDefined()
    expect(screen.getByText(/Membership/)).toBeDefined()
  })

  it('renders all 5 class cards', () => {
    render(<GymClasses />)
    expect(screen.getByText('Muscle Sculpt')).toBeDefined()
    expect(screen.getByText('Fat Burn')).toBeDefined()
    expect(screen.getByText('Cycling')).toBeDefined()
    expect(screen.getByText('Pilates & Stretching')).toBeDefined()
    expect(screen.getByText('Boxing')).toBeDefined()
  })

  it('renders gym classes subheading', () => {
    render(<GymClasses />)
    expect(screen.getByText('Gym Classes')).toBeDefined()
  })
})
