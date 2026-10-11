import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { InputsShowcase } from './InputsShowcase'

describe('InputsShowcase', () => {
  it('renders the four input states with their validation affordances', () => {
    const { container } = render(<InputsShowcase />)

    expect(screen.getByRole('heading', { level: 2, name: 'Inputs' })).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Default').className).toContain('border-gray-200')
    expect(screen.getByPlaceholderText('Success').className).toContain('border-success')
    expect(screen.getByPlaceholderText('Error Input').className).toContain('border-danger')
    expect(screen.getByPlaceholderText('With Ionicons Icons')).toBeInTheDocument()

    expect(container.querySelectorAll('input')).toHaveLength(4)
    expect(screen.getByText('Success', { selector: 'label' })).toHaveClass('sr-only')
  })

  it('accepts typed input', async () => {
    render(<InputsShowcase />)

    const input = screen.getByPlaceholderText('Default')
    await userEvent.type(input, 'Hello')

    expect(input).toHaveValue('Hello')
  })
})
