import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBanner } from './CtaBanner'

describe('CtaBanner', () => {
  it('renders a paragraph and a Learn More action over the blue overlay', () => {
    const { container } = render(<CtaBanner />)
    expect(screen.getByRole('region', { name: 'Charter call to action' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Learn More' })).toHaveAttribute('href', '#booking')
    expect(screen.getByText(/A small river named Duden/)).toBeInTheDocument()
    const section = container.querySelector('section')!
    expect(section.className).toContain('bg-fixed')
    expect(container.querySelector('.bg-overlay')).not.toBeNull()
  })
})
