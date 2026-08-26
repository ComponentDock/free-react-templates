import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { UtilityBar } from './UtilityBar'

describe('UtilityBar', () => {
  it('renders phone number', () => {
    render(<UtilityBar />)
    expect(screen.getByText('+953 012 3654 896')).toBeInTheDocument()
  })

  it('renders email', () => {
    render(<UtilityBar />)
    expect(screen.getByText('support@medical.com')).toBeInTheDocument()
  })

  it('renders book appointment link', () => {
    render(<UtilityBar />)
    expect(screen.getByText('BOOK APPOINTMENT')).toHaveAttribute('href', '#appointment')
  })
})
