import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders phone and email', () => {
    render(<TopBar />)
    expect(screen.getByText(/\+01 256 25 235/)).toBeInTheDocument()
    expect(screen.getByText(/info@cartly\.com/)).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<TopBar />)
    expect(screen.getByText(/Gift Card/i)).toBeInTheDocument()
    expect(screen.getByText(/Track Order/i)).toBeInTheDocument()
    expect(screen.getByText(/Contact Us/i)).toBeInTheDocument()
  })
})
