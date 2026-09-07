import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Step3 } from './Step3'

describe('Step3', () => {
  it('renders the message textarea', () => {
    render(<Step3 />)
    expect(screen.getByPlaceholderText('Your message here!')).toBeInTheDocument()
  })

  it('renders the terms consent checkbox pre-checked', () => {
    render(<Step3 />)
    expect(screen.getByRole('checkbox')).toBeChecked()
  })

  it('renders the terms and conditions link', () => {
    render(<Step3 />)
    const link = screen.getByRole('link', { name: /terms and conditions/i })
    expect(link).toHaveAttribute('href', '#terms')
  })

  it('renders the consent label containing the terms text', () => {
    render(<Step3 />)
    const label = screen.getByLabelText(/please accept/i)
    expect(label).toBeInTheDocument()
  })
})
