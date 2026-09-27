import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { UtilityBar } from './UtilityBar'

describe('UtilityBar', () => {
  it('renders phone number', () => {
    render(<UtilityBar />)
    expect(screen.getByText('+12312-3-1209')).toBeInTheDocument()
  })

  it('renders sell/rent property link', () => {
    render(<UtilityBar />)
    expect(screen.getByText('SELL / RENT PROPERTY')).toBeInTheDocument()
  })

  it('renders login/register link', () => {
    render(<UtilityBar />)
    expect(screen.getByText('LOGIN / REGISTER')).toBeInTheDocument()
  })

  it('links phone to tel: protocol', () => {
    render(<UtilityBar />)
    const phoneLink = screen.getByText('+12312-3-1209')
    expect(phoneLink).toHaveAttribute('href', 'tel:+1231231209')
  })
})
