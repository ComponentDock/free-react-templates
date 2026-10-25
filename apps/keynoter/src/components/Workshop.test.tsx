import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { WORKSHOP } from '../content'
import { Workshop } from './Workshop'

describe('Workshop', () => {
  it('is the flush-left split band with eyebrow, heading and copy', () => {
    render(<Workshop />)
    const band = document.getElementById('workshops') as HTMLElement
    expect(band.className).toContain('bg-band')
    expect(band.querySelector('.duotone img')).toHaveAttribute('alt', WORKSHOP.imageAlt)
    expect(screen.getByText(WORKSHOP.eyebrow)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(WORKSHOP.heading)
    expect(screen.getByText(WORKSHOP.copy)).toBeInTheDocument()
  })

  it('offers two CTAs with distinct fills and real targets', () => {
    render(<Workshop />)
    const more = screen.getByRole('link', { name: WORKSHOP.primary.label })
    const tickets = screen.getByRole('link', { name: WORKSHOP.secondary.label })
    expect(more).toHaveAttribute('href', WORKSHOP.primary.href)
    expect(tickets).toHaveAttribute('href', WORKSHOP.secondary.href)
    expect(more.className).toContain('bg-brand')
    expect(tickets.className).toContain('bg-action')
  })
})
