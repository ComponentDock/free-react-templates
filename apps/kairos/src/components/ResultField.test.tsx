import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ResultField } from './ResultField'

describe('ResultField', () => {
  it('renders a disabled input', () => {
    render(<ResultField selectedDate={null} />)
    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled()
  })

  it('shows placeholder when no date is selected', () => {
    render(<ResultField selectedDate={null} />)
    const input = screen.getByPlaceholderText('Select date')
    expect(input).toBeInTheDocument()
  })

  it('displays formatted date when a date is selected', () => {
    render(<ResultField selectedDate={new Date(2026, 7, 20)} />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveValue('August 20, 2026')
  })

  it('formats dates in different months correctly', () => {
    render(<ResultField selectedDate={new Date(2026, 11, 25)} />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveValue('December 25, 2026')
  })

  it('has accessible label', () => {
    render(<ResultField selectedDate={null} />)
    expect(screen.getByLabelText('Selected date')).toBeInTheDocument()
  })
})
