import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders four service cards', () => {
    render(<Services />)
    expect(screen.getByText('Why Choose Studium')).toBeInTheDocument()
    expect(screen.getByText('Top Quality Content')).toBeInTheDocument()
    expect(screen.getByText('Highly Skilled Instructor')).toBeInTheDocument()
    expect(screen.getByText('World Class Quiz')).toBeInTheDocument()
    expect(screen.getByText('Get Certified')).toBeInTheDocument()
  })
})
