import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders phone and email links', () => {
    render(<TopBar />)
    expect(screen.getByText('+953 012 3654 896')).toBeInTheDocument()
    expect(screen.getByText('support@vitala.com')).toBeInTheDocument()
  })

  it('renders appointment button', () => {
    render(<TopBar />)
    expect(screen.getByRole('link', { name: /Appointment/i })).toBeInTheDocument()
  })

  it('renders language selector', () => {
    render(<TopBar />)
    expect(screen.getByRole('combobox', { name: /Language/i })).toBeInTheDocument()
  })
})
