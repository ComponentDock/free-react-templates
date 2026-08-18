import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { CtaBand } from './CtaBand'

describe('CtaBand', () => {
  it('renders the blue band with heading and both CTA buttons', () => {
    render(<CtaBand />)

    const band = screen.getByRole('region', { name: /start building your own job board/i })
    const heading = within(band).getByRole('heading', { level: 2 })
    expect(heading.textContent).toContain('Start building your own job board now')

    expect(within(band).getByRole('link', { name: /search job/i })).toBeInTheDocument()
    expect(within(band).getByRole('link', { name: /post a job/i })).toBeInTheDocument()
  })

  it('uses a solid brand-blue background', () => {
    render(<CtaBand />)

    const band = screen.getByRole('region', { name: /start building your own job board/i })
    expect(band.className).toContain('bg-brand')
  })
})
