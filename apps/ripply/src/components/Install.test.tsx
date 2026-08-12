import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Install } from './Install'

describe('Install', () => {
  it('renders the titles, copy and the two pill buttons', () => {
    render(<Install />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Now Install Available On' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 4, name: 'Create Your Apps Galary' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Compatible with Android and iOS/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Android' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'App Store' })).toBeInTheDocument()
  })
})
