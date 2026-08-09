import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Host } from './Host'

describe('Host', () => {
  it('renders the host section with name, bio, and pull quote', () => {
    render(<Host />)

    expect(screen.getByText('About the Host')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Meet Your Host' })).toBeInTheDocument()
    expect(screen.getByText('Alex Morgan')).toBeInTheDocument()
    expect(
      screen.getByText(/serial entrepreneur, angel investor, and storyteller/i),
    ).toBeInTheDocument()
    expect(screen.getByText(/Every founder has a story worth sharing/)).toBeInTheDocument()
  })
})
