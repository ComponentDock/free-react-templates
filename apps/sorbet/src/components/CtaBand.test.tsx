import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBand } from './CtaBand'

describe('CtaBand', () => {
  it('renders the closing call to action', () => {
    const { container } = render(<CtaBand />)

    expect(container.querySelector('section')!.id).toBe('cta')
    expect(
      screen.getByRole('heading', { level: 2, name: 'Do you like this UI Kit?' }),
    ).toBeInTheDocument()
    const button = screen.getByRole('button', { name: "Download, it's free!" })
    expect(button.className).toContain('bg-primary-500')
    expect(button.className).toContain('text-[16px]')
  })
})
