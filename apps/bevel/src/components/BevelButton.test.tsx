import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BevelButton } from './BevelButton'

describe('BevelButton', () => {
  it('renders the label text', () => {
    render(<BevelButton label="Test" bg="#007bff" hoverBg="#006adb" />)

    expect(screen.getByText('Test')).toBeInTheDocument()
  })

  it('applies the background color via style', () => {
    render(<BevelButton label="Test" bg="#ff0000" hoverBg="#cc0000" />)

    const button = screen.getByRole('button', { name: 'Test' })
    expect(button).toHaveStyle({ backgroundColor: '#ff0000' })
  })

  it('applies the text color via style', () => {
    render(<BevelButton label="Test" bg="#ff0000" hoverBg="#cc0000" text="#000" />)

    const button = screen.getByRole('button', { name: 'Test' })
    expect(button).toHaveStyle({ color: '#000' })
  })

  it('applies border color matching background', () => {
    render(<BevelButton label="Test" bg="#007bff" hoverBg="#006adb" />)

    const button = screen.getByRole('button', { name: 'Test' })
    expect(button).toHaveStyle({ borderColor: '#007bff' })
  })

  it('renders with small size classes', () => {
    render(<BevelButton label="Small" bg="#007bff" hoverBg="#006adb" size="sm" />)

    const button = screen.getByRole('button', { name: 'Small' })
    expect(button.className).toContain('text-[10px]')
  })

  it('renders with large size classes', () => {
    render(<BevelButton label="Large" bg="#007bff" hoverBg="#006adb" size="lg" />)

    const button = screen.getByRole('button', { name: 'Large' })
    expect(button.className).toContain('text-[16px]')
  })

  it('renders with medium size by default', () => {
    render(<BevelButton label="Med" bg="#007bff" hoverBg="#006adb" />)

    const button = screen.getByRole('button', { name: 'Med' })
    expect(button.className).toContain('text-[12px]')
  })

  it('renders as block when block=true', () => {
    render(<BevelButton label="Block" bg="#007bff" hoverBg="#006adb" block />)

    const button = screen.getByRole('button', { name: 'Block' })
    expect(button.className).toContain('block')
    expect(button.className).toContain('w-full')
  })

  it('does not render as block by default', () => {
    render(<BevelButton label="Normal" bg="#007bff" hoverBg="#006adb" />)

    const button = screen.getByRole('button', { name: 'Normal' })
    expect(button.className).not.toContain('block')
  })

  it('applies custom className', () => {
    render(
      <BevelButton label="Custom" bg="#007bff" hoverBg="#006adb" className="my-custom-class" />,
    )

    const button = screen.getByRole('button', { name: 'Custom' })
    expect(button.className).toContain('my-custom-class')
  })

  it('has the white sweep overlay element', () => {
    render(<BevelButton label="Test" bg="#007bff" hoverBg="#006adb" />)

    const button = screen.getByRole('button', { name: 'Test' })
    // The overlay span has aria-hidden and scale-x-0 class
    const overlay = button.querySelector('[aria-hidden="true"]')
    expect(overlay).toBeInTheDocument()
    expect(overlay?.className).toContain('scale-x-0')
  })

  it('flips label to black on hover', () => {
    render(<BevelButton label="Hover" bg="#007bff" hoverBg="#006adb" />)

    const label = screen.getByText('Hover')
    // The label span should have group-hover:text-black
    expect(label.className).toContain('group-hover:text-black')
  })

  it('is a button element', () => {
    render(<BevelButton label="Btn" bg="#007bff" hoverBg="#006adb" />)

    expect(screen.getByRole('button', { name: 'Btn' })).toBeInstanceOf(HTMLButtonElement)
  })
})
