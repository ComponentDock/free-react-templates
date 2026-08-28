import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ColorButtons } from './ColorButtons'

describe('ColorButtons', () => {
  it('renders all 18 color buttons', () => {
    render(<ColorButtons />)

    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(18)
  })

  it('renders all 18 color names', () => {
    render(<ColorButtons />)

    const names = [
      'Primary',
      'Secondary',
      'Success',
      'Info',
      'Warning',
      'Danger',
      'Light',
      'Orange',
      'Indigo',
      'Pink',
      'Deep Orange',
      'Aqua',
      'Dark',
      'Black',
      'Purple',
      'Blue',
      'Brown',
      'Blue Gray',
    ]
    for (const name of names) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
  })

  it('applies custom className', () => {
    const { container } = render(<ColorButtons className="custom" />)

    expect(container.firstElementChild?.className).toContain('custom')
  })

  it('renders Warning button with dark text', () => {
    render(<ColorButtons />)

    const warning = screen.getByText('Warning')
    const button = warning.closest('button')
    expect(button).toHaveStyle({ color: '#212529' })
  })

  it('renders Light button with dark text', () => {
    render(<ColorButtons />)

    const light = screen.getByText('Light')
    const button = light.closest('button')
    expect(button).toHaveStyle({ color: '#212529' })
  })

  it('renders Primary button with white text', () => {
    render(<ColorButtons />)

    const primary = screen.getByText('Primary')
    const button = primary.closest('button')
    expect(button).toHaveStyle({ color: '#fff' })
  })
})
