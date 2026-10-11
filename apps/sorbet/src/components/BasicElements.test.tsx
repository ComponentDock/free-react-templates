import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BasicElements } from './BasicElements'

describe('BasicElements', () => {
  it('renders the catalog opener heading', () => {
    const { container } = render(<BasicElements />)

    expect(container.querySelector('section')!.id).toBe('basicElements')
    const heading = screen.getByRole('heading', { level: 1, name: 'Basic Elements' })
    expect(heading.className).toContain('text-[34px]')
  })
})
