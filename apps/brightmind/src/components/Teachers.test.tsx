import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Teachers } from './Teachers'

describe('Teachers', () => {
  it('renders the section heading and teacher cards', () => {
    render(<Teachers />)
    expect(screen.getByRole('heading', { name: 'Our Experience Advisors' })).toBeInTheDocument()
    expect(screen.getByText('Ivan Jacobson')).toBeInTheDocument()
    expect(screen.getByText('Computer Science')).toBeInTheDocument()
    expect(screen.getByText('Sarah Parker')).toBeInTheDocument()
    expect(screen.getByText('Robert Chen')).toBeInTheDocument()
  })
})
