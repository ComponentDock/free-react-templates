import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Welcome } from './Welcome'

describe('Welcome', () => {
  it('renders the welcome heading and the years-of-service badge', () => {
    render(<Welcome />)
    expect(screen.getByRole('heading', { level: 2, name: 'Welcome To Shear!' })).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
    expect(screen.getByText('years in excellent service')).toBeInTheDocument()
  })

  it('links Learn More to the services section', () => {
    render(<Welcome />)
    expect(screen.getByRole('link', { name: 'Learn More' })).toHaveAttribute('href', '#services')
  })
})
