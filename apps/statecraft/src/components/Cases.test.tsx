import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Cases } from './Cases'

describe('Cases', () => {
  it('renders Top Stories with a More Cases link and three cards', () => {
    const { container } = render(<Cases />)

    expect(screen.getByRole('heading', { level: 4, name: 'Top Stories' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'More Cases' })).toHaveAttribute('href', '#contact')
    expect(screen.getAllByRole('heading', { level: 4, name: 'Business Strategy' })).toHaveLength(3)
    expect(container.querySelectorAll('img')).toHaveLength(3)
  })
})
