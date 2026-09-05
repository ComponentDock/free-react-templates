import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ToggleShowcase } from './ToggleShowcase'

describe('ToggleShowcase', () => {
  it('renders the heading "Checkbox #9"', () => {
    render(<ToggleShowcase />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Checkbox #9')
  })

  it('renders all four switch captions', () => {
    render(<ToggleShowcase />)
    expect(screen.getByText('Switch 1')).toBeInTheDocument()
    expect(screen.getByText('Switch 2')).toBeInTheDocument()
    expect(screen.getByText('Switch disabled')).toBeInTheDocument()
    expect(screen.getByText('Switch disabled & checked')).toBeInTheDocument()
  })

  it('renders four checkboxes', () => {
    render(<ToggleShowcase />)
    expect(screen.getAllByRole('checkbox')).toHaveLength(4)
  })

  it('Switch 1 starts checked and Switch 2 starts unchecked', () => {
    render(<ToggleShowcase />)
    expect(screen.getByRole('checkbox', { name: 'Switch 1' })).toBeChecked()
    expect(screen.getByRole('checkbox', { name: 'Switch 2' })).not.toBeChecked()
  })

  it('disabled switches are not checked and not toggleable', () => {
    render(<ToggleShowcase />)
    const disabled = screen.getByRole('checkbox', { name: 'Switch disabled' })
    const disabledChecked = screen.getByRole('checkbox', { name: 'Switch disabled & checked' })
    expect(disabled).toBeDisabled()
    expect(disabled).not.toBeChecked()
    expect(disabledChecked).toBeDisabled()
    expect(disabledChecked).toBeChecked()
  })
})
