import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ProcedureCategory } from './ProcedureCategory'

describe('ProcedureCategory', () => {
  it('shows the section heading and three procedure cards', () => {
    const { container } = render(<ProcedureCategory />)
    expect(screen.getByRole('heading', { name: 'Procedure Category' })).toBeInTheDocument()
    for (const name of ['Emergency Treatment', 'Cardiac Care', 'Lab Tests']) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
    }
    expect(container.querySelectorAll('img').length).toBe(3)
  })
})
