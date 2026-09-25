import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { AboutInfoBar } from './AboutInfoBar'

describe('AboutInfoBar', () => {
  it('renders design for info', () => {
    render(<AboutInfoBar />)
    expect(screen.getByText('Web & Mobile')).toBeInTheDocument()
  })

  it('renders phone number', () => {
    render(<AboutInfoBar />)
    expect(screen.getByText('(+01) 234 567 88')).toBeInTheDocument()
  })

  it('renders email', () => {
    render(<AboutInfoBar />)
    expect(screen.getByText('hello@boldcraft.com')).toBeInTheDocument()
  })
})
