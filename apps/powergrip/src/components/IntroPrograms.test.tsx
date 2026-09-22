import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { IntroPrograms } from './IntroPrograms'
import { programs } from '../data'

describe('IntroPrograms', () => {
  it('renders all three program cards', () => {
    render(<IntroPrograms />)
    for (const program of programs) {
      expect(screen.getByRole('heading', { level: 3, name: program.title })).toBeInTheDocument()
      expect(screen.getAllByText(program.price).length).toBeGreaterThan(0)
    }
  })
})
