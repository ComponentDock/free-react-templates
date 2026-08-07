import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Stats } from './Stats'

describe('Stats', () => {
  it('shows the four stat labels', () => {
    render(<Stats />)

    for (const label of [
      'Years of Experienced',
      'Project Done',
      'Licensed Architect',
      'Happy Customers',
    ]) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })
})
