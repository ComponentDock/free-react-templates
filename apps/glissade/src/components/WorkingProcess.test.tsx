import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WorkingProcess } from './WorkingProcess'

describe('WorkingProcess', () => {
  it('renders the section title', () => {
    render(<WorkingProcess />)
    expect(screen.getByRole('heading', { name: /Our Working Process/i })).toBeInTheDocument()
  })

  it('renders all four process steps', () => {
    render(<WorkingProcess />)
    expect(screen.getByText('1. Researching')).toBeInTheDocument()
    expect(screen.getByText('2. Wireframing')).toBeInTheDocument()
    expect(screen.getByText('3. Prototyping')).toBeInTheDocument()
    expect(screen.getByText('4. Final Design')).toBeInTheDocument()
  })
})
