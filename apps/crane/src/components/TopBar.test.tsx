import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders opening hours text', () => {
    render(<TopBar />)
    expect(screen.getByText(/Opening Hours/)).toBeInTheDocument()
  })

  it('renders Get a Quote button', () => {
    render(<TopBar />)
    expect(screen.getByText('Get a Quote')).toBeInTheDocument()
  })
})
