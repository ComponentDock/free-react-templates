import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders phone number', () => {
    render(<TopBar />)
    expect(screen.getByText('+1 234 567 8900')).toBeInTheDocument()
  })

  it('renders email address', () => {
    render(<TopBar />)
    expect(screen.getByText('info@healix.com')).toBeInTheDocument()
  })

  it('renders address', () => {
    render(<TopBar />)
    expect(screen.getByText(/123 Medical Center Dr/)).toBeInTheDocument()
  })
})
