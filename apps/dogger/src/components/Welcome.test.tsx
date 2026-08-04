import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Welcome } from './Welcome'

describe('Welcome', () => {
  it('shows the welcome heading and the three feature rows', () => {
    render(<Welcome />)

    expect(screen.getByRole('heading', { name: 'Welcome to Dogger Pet Care' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Love & Care' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Fearsome' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Beautiful' })).toBeInTheDocument()
  })

  it('renders a Read More button for every feature row', () => {
    render(<Welcome />)

    expect(screen.getAllByRole('link', { name: 'Read More' })).toHaveLength(3)
  })

  it('renders an image for every feature row', () => {
    const { container } = render(<Welcome />)

    expect(container.querySelectorAll('img')).toHaveLength(3)
  })
})
