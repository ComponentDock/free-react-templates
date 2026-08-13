import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('shows social links on the left', () => {
    render(<TopBar />)
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
  })

  it('shows the phone number and email on the right', () => {
    render(<TopBar />)
    expect(screen.getByText('012-6532-568-9746')).toBeInTheDocument()
    expect(screen.getByText('emergency@sana.health')).toBeInTheDocument()
  })
})
