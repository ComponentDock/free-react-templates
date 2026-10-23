import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading and the three service tiles', () => {
    render(<Services />)

    expect(
      screen.getByRole('heading', { level: 2, name: /We Provide These Services to Our Customers/ }),
    ).toBeInTheDocument()
    for (const title of ['Story Boarding', 'Creative Design', 'Web Development']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })
})
