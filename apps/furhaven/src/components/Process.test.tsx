import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Process } from './Process'

describe('Process', () => {
  it('renders the heading and all four adoption steps', () => {
    render(<Process />)

    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe('Process to adopt a pet')

    for (const step of [
      'Pet Selection',
      'Meeting Authority',
      'Adoption Form Filling',
      'Bring to new family',
    ]) {
      expect(screen.getByText(step)).toBeInTheDocument()
    }
  })
})
