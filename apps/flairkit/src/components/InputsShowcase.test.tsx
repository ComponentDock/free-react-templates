import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { InputsShowcase } from './InputsShowcase'

describe('InputsShowcase', () => {
  it('renders the band heading and the four labeled style groups', () => {
    render(<InputsShowcase />)

    expect(
      screen.getAllByRole('heading', { level: 3 }).map((heading) => heading.textContent),
    ).toEqual(['Inputs', 'Inputs Style 1', 'Inputs Style 2', 'Inputs Style 3', 'Inputs Style 4'])
  })

  it('renders the plain inputs with valid and invalid states', () => {
    render(<InputsShowcase />)

    expect(screen.getByLabelText('Default')).toHaveClass('border-gray-300')
    expect(screen.getByLabelText('Valid first name')).toHaveClass('border-flair-success')
    expect(screen.getByLabelText('Valid first name')).toHaveValue('Mark')
    expect(screen.getByLabelText('Invalid first name')).toHaveClass('border-flair-danger')
    expect(screen.getByLabelText('Invalid first name')).toHaveValue('Error Input')
  })

  it('renders the pill variant of the same three states', () => {
    render(<InputsShowcase />)

    expect(screen.getByLabelText('Default pill')).toHaveClass('rounded-[30px]')
    expect(screen.getByLabelText('Valid first name pill')).toHaveClass('border-flair-success')
    expect(screen.getByLabelText('Invalid first name pill')).toHaveClass('border-flair-danger')
  })

  it('renders the transparent-icon input groups', () => {
    render(<InputsShowcase />)

    expect(screen.getByLabelText('Password')).toHaveClass('border-l-0')
    expect(screen.getByLabelText('Username with icon')).toHaveClass('rounded-[30px]')
    expect(screen.getByLabelText('Email address with icon')).toHaveClass('border-r-0')
  })

  it('renders the underline-only inputs', () => {
    render(<InputsShowcase />)

    const username = screen.getByLabelText('Underline username')

    expect(username).toHaveClass('border-b')
    expect(username).toHaveClass('bg-transparent')
    expect(screen.getByLabelText('Underline password')).toHaveAttribute('type', 'password')
    expect(screen.getByLabelText('Underline email')).toHaveAttribute('type', 'email')
  })
})
