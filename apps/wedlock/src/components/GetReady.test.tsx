import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { GetReady } from './GetReady'

describe('GetReady', () => {
  it('renders the preparation heading', () => {
    render(<GetReady />)
    expect(screen.getByRole('heading', { level: 1, name: 'Get ready with us' })).toBeInTheDocument()
  })

  it('renders six preparation items with titles', () => {
    render(<GetReady />)
    const items = screen.getAllByRole('listitem')
    expect(items.length).toBe(6)
    expect(screen.getByText('The Dress')).toBeInTheDocument()
    expect(screen.getByText('The Venue')).toBeInTheDocument()
    expect(screen.getByText('The Cake')).toBeInTheDocument()
    expect(screen.getByText('Photography')).toBeInTheDocument()
    expect(screen.getByText('Music')).toBeInTheDocument()
    expect(screen.getByText('Honeymoon')).toBeInTheDocument()
  })
})
