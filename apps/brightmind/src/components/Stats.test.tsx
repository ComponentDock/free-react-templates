import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Stats } from './Stats'

describe('Stats', () => {
  it('renders three statistics', () => {
    render(<Stats />)
    expect(screen.getByText('12,000+')).toBeInTheDocument()
    expect(screen.getByText('Satisfied Students')).toBeInTheDocument()
    expect(screen.getByText('500+')).toBeInTheDocument()
    expect(screen.getByText('Courses Completed')).toBeInTheDocument()
    expect(screen.getByText('200+')).toBeInTheDocument()
    expect(screen.getByText('Expert Advisors')).toBeInTheDocument()
  })
})
