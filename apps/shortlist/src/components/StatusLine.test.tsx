import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { StatusLine } from './StatusLine'

describe('StatusLine', () => {
  it('exists before the first click and reserves its line box', () => {
    render(<StatusLine message="" />)

    const status = screen.getByRole('status')
    expect(status.textContent).toBe('')
    expect(status.className).toContain('min-h-[1.5em]')
    expect(status.className).toContain('text-[#3f6212]')
    expect(status.className).toContain('font-semibold')
  })

  it('announces the latest sentence', () => {
    render(<StatusLine message="UX Writer (Contract, 6 months) saved to your list." />)

    expect(screen.getByRole('status')).toHaveTextContent(
      'UX Writer (Contract, 6 months) saved to your list.',
    )
  })
})
