import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Converter } from './Converter'

describe('Converter', () => {
  it('renders the converter section heading', () => {
    render(<Converter />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Bitcoin To Fiat Currency Calculator',
    )
  })

  it('renders two conversion forms with inputs', () => {
    render(<Converter />)
    const amountInputs = screen.getAllByLabelText('Amount')
    expect(amountInputs).toHaveLength(2)
  })

  it('renders currency select dropdowns', () => {
    render(<Converter />)
    const fromSelects = screen.getAllByLabelText('From currency')
    const toSelects = screen.getAllByLabelText('To currency')
    expect(fromSelects).toHaveLength(2)
    expect(toSelects).toHaveLength(2)
  })

  it('displays the equals sign between inputs', () => {
    render(<Converter />)
    const equals = screen.getAllByText('=')
    expect(equals).toHaveLength(2)
  })

  it('shows result inputs as read-only', () => {
    render(<Converter />)
    const results = screen.getAllByLabelText('Result')
    results.forEach((input) => {
      expect(input).toHaveAttribute('readonly')
    })
  })

  it('displays the parallax background image', () => {
    render(<Converter />)
    const bg = document.querySelector('img[src*="vestly-converter"]')
    expect(bg).toBeInTheDocument()
  })
})
