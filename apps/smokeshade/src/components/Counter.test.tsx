import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Counter } from './Counter'

describe('Counter', () => {
  it('renders the section heading', () => {
    render(<Counter />)
    expect(screen.getByText('We have a lot of experience')).toBeInTheDocument()
  })

  it('renders two counter items', () => {
    render(<Counter />)
    expect(screen.getByText('Successful projects')).toBeInTheDocument()
    expect(screen.getByText('Events')).toBeInTheDocument()
  })

  it('renders a Read More button', () => {
    render(<Counter />)
    expect(screen.getByRole('link', { name: /read more/i })).toBeInTheDocument()
  })
})
