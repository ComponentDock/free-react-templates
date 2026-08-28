import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BoltButton } from './BoltButton'

describe('BoltButton', () => {
  it('renders with the correct label', () => {
    render(<BoltButton label="Click me" bg="#007bff" hoverBg="#006adb" />)
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument()
  })

  it('applies default medium size classes', () => {
    render(<BoltButton label="Btn" bg="#007bff" hoverBg="#006adb" />)
    const btn = screen.getByRole('button', { name: /btn/i })
    expect(btn.className).toContain('rounded')
  })

  it('applies small size classes', () => {
    render(<BoltButton label="Btn" bg="#007bff" hoverBg="#006adb" size="sm" />)
    const btn = screen.getByRole('button', { name: /btn/i })
    expect(btn.className).toContain('px-3')
  })

  it('applies large size classes', () => {
    render(<BoltButton label="Btn" bg="#007bff" hoverBg="#006adb" size="lg" />)
    const btn = screen.getByRole('button', { name: /btn/i })
    expect(btn.className).toContain('px-7')
  })

  it('applies block width when block is true', () => {
    render(<BoltButton label="Btn" bg="#007bff" hoverBg="#006adb" block />)
    const btn = screen.getByRole('button', { name: /btn/i })
    expect(btn.className).toContain('block')
    expect(btn.className).toContain('w-full')
  })

  it('does not apply block width by default', () => {
    render(<BoltButton label="Btn" bg="#007bff" hoverBg="#006adb" />)
    const btn = screen.getByRole('button', { name: /btn/i })
    expect(btn.className).not.toContain('w-full')
  })

  it('sets background color inline', () => {
    render(<BoltButton label="Btn" bg="#dc3545" hoverBg="#ca2333" />)
    const btn = screen.getByRole('button', { name: /btn/i })
    expect(btn).toHaveStyle({ backgroundColor: '#dc3545' })
  })

  it('sets text color inline', () => {
    render(<BoltButton label="Btn" bg="#007bff" hoverBg="#006adb" text="#ffffff" />)
    const btn = screen.getByRole('button', { name: /btn/i })
    expect(btn).toHaveStyle({ color: '#ffffff' })
  })

  it('changes background on hover', async () => {
    const user = userEvent.setup()
    render(<BoltButton label="Btn" bg="#007bff" hoverBg="#006adb" />)
    const btn = screen.getByRole('button', { name: /btn/i })
    await user.hover(btn)
    expect(btn).toHaveStyle({ backgroundColor: '#006adb' })
    await user.unhover(btn)
    expect(btn).toHaveStyle({ backgroundColor: '#007bff' })
  })

  it('accepts custom className', () => {
    render(<BoltButton label="Btn" bg="#007bff" hoverBg="#006adb" className="my-class" />)
    const btn = screen.getByRole('button', { name: /btn/i })
    expect(btn.className).toContain('my-class')
  })
})
