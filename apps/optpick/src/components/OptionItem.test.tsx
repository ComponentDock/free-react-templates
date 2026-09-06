import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { OptionItem } from './OptionItem'

describe('OptionItem', () => {
  it('renders the option label', () => {
    render(<OptionItem label="Apple" checked={false} onClick={vi.fn()} />)
    expect(screen.getByRole('option', { name: /apple/i })).toBeInTheDocument()
  })

  it('shows unchecked state when not selected', () => {
    render(<OptionItem label="Apple" checked={false} onClick={vi.fn()} />)
    const option = screen.getByRole('option')
    expect(option).toHaveAttribute('aria-selected', 'false')
  })

  it('shows checked state when selected', () => {
    render(<OptionItem label="Apple" checked={true} onClick={vi.fn()} />)
    const option = screen.getByRole('option')
    expect(option).toHaveAttribute('aria-selected', 'true')
  })

  it('calls onClick when clicked', async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()
    render(<OptionItem label="Apple" checked={false} onClick={onClick} />)
    await user.click(screen.getByRole('option'))
    expect(onClick).toHaveBeenCalledOnce()
  })

  it('is disabled when disabled prop is true', () => {
    render(<OptionItem label="Apple" checked={false} disabled onClick={vi.fn()} />)
    const option = screen.getByRole('option')
    expect(option).toBeDisabled()
    expect(option).toHaveAttribute('aria-disabled', 'true')
  })

  it('has reduced opacity when disabled', () => {
    render(<OptionItem label="Apple" checked={false} disabled onClick={vi.fn()} />)
    const option = screen.getByRole('option')
    expect(option.className).toContain('opacity-50')
  })

  it('applies green background when checked', () => {
    render(<OptionItem label="Apple" checked={true} onClick={vi.fn()} />)
    const option = screen.getByRole('option')
    expect(option.className).toContain('bg-optpick-checkmark-bg')
  })

  it('renders the checkmark SVG when checked', () => {
    const { container } = render(<OptionItem label="Apple" checked={true} onClick={vi.fn()} />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })
})
