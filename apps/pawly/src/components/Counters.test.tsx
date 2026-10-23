import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Counters } from './Counters'

describe('Counters', () => {
  it('shows a strip with at least two stat counters', () => {
    render(<Counters />)

    const counters = screen.getAllByRole('listitem')
    expect(counters.length).toBeGreaterThanOrEqual(2)
    expect(screen.getByText('354+')).toBeInTheDocument()
    expect(screen.getByText('Successful Treatments')).toBeInTheDocument()
  })
})
