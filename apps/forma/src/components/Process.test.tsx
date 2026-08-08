import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Process } from './Process'

describe('Process', () => {
  it('renders the heading and four process steps', () => {
    render(<Process />)

    expect(screen.getByRole('heading', { level: 2, name: 'How We Work' })).toBeInTheDocument()

    for (const step of ['Consult', 'Design', 'Refine', 'Execute']) {
      expect(screen.getByRole('heading', { level: 3, name: step })).toBeInTheDocument()
    }
    for (const number of ['01', '02', '03', '04']) {
      expect(screen.getByText(number)).toBeInTheDocument()
    }
  })
})
