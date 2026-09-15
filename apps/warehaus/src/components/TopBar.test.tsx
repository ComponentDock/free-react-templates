import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { TopBar } from '../components/TopBar'

describe('TopBar', () => {
  it('renders phone number', () => {
    render(<TopBar />)
    expect(screen.getByText('+ 1235 2355 98')).toBeInTheDocument()
  })

  it('renders email', () => {
    render(<TopBar />)
    expect(screen.getByText('youremail@email.com')).toBeInTheDocument()
  })

  it('renders delivery info', () => {
    render(<TopBar />)
    expect(screen.getByText(/3-5 Business days delivery/)).toBeInTheDocument()
  })
})
