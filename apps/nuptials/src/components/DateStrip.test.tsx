import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { DateStrip } from './DateStrip'
import { DATE_NOTE, DATE_TEXT } from '../lib/site'

describe('DateStrip', () => {
  it('carries the day, the hour and the note in one band', () => {
    const { container } = render(<DateStrip />)

    const band = container.querySelector('section') as HTMLElement

    expect(band).toHaveAttribute('id', 'date')
    expect(band).toHaveClass('bg-band')
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(DATE_TEXT)
    expect(screen.getByText(DATE_NOTE)).toBeInTheDocument()
    expect(container.querySelectorAll('svg[aria-hidden="true"]')).toHaveLength(1)
  })
})
