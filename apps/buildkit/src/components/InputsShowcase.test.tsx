import { describe, it, expect } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { InputsShowcase } from './InputsShowcase'

const HELPER = "We'll never share your details with anyone else."

describe('InputsShowcase', () => {
  it('renders floating-label groups with helper text', () => {
    const { container } = render(<InputsShowcase />)

    expect(container.querySelector('section')!.id).toBe('inputs')
    expect(screen.getByRole('heading', { level: 2, name: 'Inputs' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'With Floating Label' })).toBeInTheDocument()

    const name = screen.getByLabelText('Full name')
    expect(name.className).toContain('h-12')
    expect(name.className).toContain('rounded')
    expect(name.className).toContain('focus:border-primary-600')
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getAllByText(HELPER)).toHaveLength(2)
  })

  it('prevents the form submissions', () => {
    const { container } = render(<InputsShowcase />)

    const forms = container.querySelectorAll('form')
    expect(forms).toHaveLength(2)
    expect(fireEvent.submit(forms[0]!)).toBe(false)
    expect(fireEvent.submit(forms[1]!)).toBe(false)
  })
})
