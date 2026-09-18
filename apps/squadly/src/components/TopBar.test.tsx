import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders the phone number and address', () => {
    render(<TopBar />)

    expect(screen.getByText(/Free Call/)).toBeInTheDocument()
    expect(screen.getByText(/\+1 234 456 78910/)).toBeInTheDocument()
    expect(screen.getByText(/198 West 21th Street/)).toBeInTheDocument()
  })

  it('renders the support label on wider screens', () => {
    render(<TopBar />)

    expect(screen.getByText(/24\/7 Customer Support/)).toBeInTheDocument()
  })
})
