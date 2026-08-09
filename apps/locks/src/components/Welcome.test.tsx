import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Welcome } from './Welcome'

describe('Welcome', () => {
  it('renders the welcome heading and introductory copy', () => {
    render(<Welcome />)
    expect(
      screen.getByRole('heading', { level: 2, name: /welcome to locks a hair salon/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Little Blind Text/i)).toBeInTheDocument()
  })
})
