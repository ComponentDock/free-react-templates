import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'
import { phone, email, hours } from '../data'
import { describe, expect, it } from 'vitest'

describe('TopBar', () => {
  it('renders phone number', () => {
    render(<TopBar />)
    expect(screen.getByText(phone)).toBeInTheDocument()
  })

  it('renders email address', () => {
    render(<TopBar />)
    expect(screen.getByText(email)).toBeInTheDocument()
  })

  it('renders opening hours', () => {
    render(<TopBar />)
    expect(screen.getByText(hours)).toBeInTheDocument()
  })
})
