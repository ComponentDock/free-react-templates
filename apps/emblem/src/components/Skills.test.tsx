import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Skills } from './Skills'
import { skills } from '../data'

describe('Skills', () => {
  it('renders the signature block with name and role', () => {
    render(<Skills />)
    expect(
      screen.getByRole('heading', { level: 2, name: /digital partner starts here/ }),
    ).toBeInTheDocument()
    expect(screen.getByText('Mr. John Doe')).toBeInTheDocument()
    expect(screen.getByText('CEO & Co-Founder')).toBeInTheDocument()
  })

  it('renders four progress bars with the reference widths', () => {
    render(<Skills />)
    expect(
      screen.getByRole('heading', { level: 3, name: /expertise and skills/ }),
    ).toBeInTheDocument()
    for (const skill of skills) {
      const bar = screen.getByRole('progressbar', { name: `${skill.label} proficiency` })
      expect(bar).toHaveAttribute('aria-valuenow', String(skill.width))
      const fill = bar.querySelector('div')!
      expect(fill).toHaveStyle({ width: `${skill.width}%` })
      expect(fill).toHaveClass('bg-brand')
    }
    expect(screen.getAllByRole('progressbar')).toHaveLength(4)
  })
})
