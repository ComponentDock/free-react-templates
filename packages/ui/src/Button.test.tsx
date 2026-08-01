import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from '@free-react-templates/ui'

describe('Button', () => {
  it('renders a button with default variant and size', () => {
    render(<Button>Click me</Button>)
    const button = screen.getByRole('button', { name: 'Click me' })
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('type', 'button')
  })

  it.each(['primary', 'outline', 'ghost', 'danger'] as const)(
    'applies the %s variant classes',
    (variant) => {
      render(<Button variant={variant}>Label</Button>)
      const button = screen.getByRole('button', { name: 'Label' })
      if (variant === 'primary') {
        expect(button.className).toContain('bg-primary-600')
      } else if (variant === 'outline') {
        expect(button.className).toContain('border')
      } else if (variant === 'ghost') {
        expect(button.className).toContain('hover:bg-gray-100')
      } else {
        expect(button.className).toContain('bg-red-600')
      }
    },
  )

  it.each(['sm', 'md', 'lg'] as const)('applies the %s size classes', (size) => {
    render(<Button size={size}>Label</Button>)
    const button = screen.getByRole('button', { name: 'Label' })
    if (size === 'sm') {
      expect(button.className).toContain('h-8')
    } else if (size === 'md') {
      expect(button.className).toContain('h-10')
    } else {
      expect(button.className).toContain('h-12')
    }
  })

  it('forwards the type attribute', () => {
    render(<Button type="submit">Save</Button>)
    expect(screen.getByRole('button', { name: 'Save' })).toHaveAttribute('type', 'submit')
  })

  it('applies a custom className on top of the defaults', () => {
    render(<Button className="custom-class">Label</Button>)
    expect(screen.getByRole('button', { name: 'Label' })).toHaveClass('custom-class')
  })

  it('is disabled when the disabled prop is set', () => {
    render(<Button disabled>Label</Button>)
    expect(screen.getByRole('button', { name: 'Label' })).toBeDisabled()
  })

  it('forwards a ref to the underlying element', () => {
    const ref = { current: null as HTMLButtonElement | null }
    render(<Button ref={ref}>Label</Button>)
    expect(ref.current).toBeInstanceOf(HTMLButtonElement)
  })

  it('calls onClick when clicked', async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()
    render(<Button onClick={onClick}>Label</Button>)
    await user.click(screen.getByRole('button', { name: 'Label' }))
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
