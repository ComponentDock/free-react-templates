import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Jobs } from './Jobs'

describe('Jobs', () => {
  it('renders the heading and four job cards', () => {
    const { container } = render(<Jobs />)
    expect(screen.getByRole('heading', { name: 'Job History' })).toBeInTheDocument()
    const cards = container.querySelectorAll('.job-card')
    expect(cards).toHaveLength(4)
    expect(screen.getByText('Senior Creative Design')).toBeInTheDocument()
    expect(screen.getAllByText('Old Bird IT, New York')).toHaveLength(2)
    expect(screen.getAllByText("Jul '15 to Present")).toHaveLength(2)
  })
})
