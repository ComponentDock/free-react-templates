import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Welcome } from './Welcome'

describe('Welcome', () => {
  it('renders the Welcome heading', () => {
    render(<Welcome />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Welcome!')
  })

  it('renders the description text', () => {
    render(<Welcome />)

    expect(screen.getByText(/behind the word mountains/)).toBeInTheDocument()
  })

  it('renders the Learn More button', () => {
    render(<Welcome />)

    expect(screen.getByRole('link', { name: 'Learn More' })).toBeInTheDocument()
  })

  it('renders the See video link', () => {
    render(<Welcome />)

    expect(screen.getByRole('link', { name: 'See video' })).toBeInTheDocument()
  })
})
