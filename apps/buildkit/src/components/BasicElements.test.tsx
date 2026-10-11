import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BasicElements } from './BasicElements'

describe('BasicElements', () => {
  it('renders the kit intro heading on white', () => {
    render(<BasicElements />)

    const heading = screen.getByRole('heading', { level: 1, name: 'Basic Elements' })
    expect(heading).toBeInTheDocument()
    expect(heading.className).toContain('text-heading')
  })
})
