import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the section heading', () => {
    render(<Features />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Get ready for seamless/)
  })

  it('renders all four feature cards', () => {
    render(<Features />)
    expect(screen.getByText('Offline mode.')).toBeInTheDocument()
    expect(screen.getByText('High quality audio.')).toBeInTheDocument()
    expect(screen.getByText('No ads.')).toBeInTheDocument()
    expect(screen.getByText('Unlimited skips.')).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<Features />)
    expect(screen.getByText('Save and listen anywhere.')).toBeInTheDocument()
    expect(screen.getByText('Enjoy the full range of sound.')).toBeInTheDocument()
    expect(screen.getByText('Enjoy nonstop music.')).toBeInTheDocument()
    expect(screen.getByText('Just tap skip.')).toBeInTheDocument()
  })

  it('has an id of features for navigation', () => {
    render(<Features />)
    const section = document.querySelector('#features')!
    expect(section).toBeInTheDocument()
  })
})
