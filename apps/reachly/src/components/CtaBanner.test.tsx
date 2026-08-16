import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CtaBanner } from './CtaBanner'
import { ctaBanner } from '../data'

describe('CtaBanner', () => {
  it('shows the pink-gradient box with heading, copy and white-bordered button', () => {
    render(<CtaBanner />)

    const heading = screen.getByRole('heading', { level: 2, name: ctaBanner.heading })
    // The h2 sits directly inside the pink-gradient box.
    const box = heading.closest('div')
    expect(box?.className).toMatch(/from-brand/)

    expect(screen.getByText(ctaBanner.paragraph)).toBeInTheDocument()

    const cta = screen.getByRole('link', { name: ctaBanner.buttonLabel })
    expect(cta).toHaveAttribute('href', '#contact')
    expect(cta.className).toMatch(/border-white/)
  })
})
