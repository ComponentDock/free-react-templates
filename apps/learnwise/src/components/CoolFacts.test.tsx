import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CoolFacts } from './CoolFacts'

describe('CoolFacts', () => {
  it('renders all four statistics', () => {
    render(<CoolFacts />)
    expect(screen.getByText('1912')).toBeInTheDocument()
    expect(screen.getByText('Success Stories')).toBeInTheDocument()
    expect(screen.getByText('123')).toBeInTheDocument()
    expect(screen.getByText('Dedicated Tutors')).toBeInTheDocument()
    expect(screen.getByText('89')).toBeInTheDocument()
    expect(screen.getByText('Scheduled Events')).toBeInTheDocument()
    expect(screen.getByText('56')).toBeInTheDocument()
    expect(screen.getByText('Available Courses')).toBeInTheDocument()
  })
})
