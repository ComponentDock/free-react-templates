import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('shows the heading with a subtitle', () => {
    render(<Services />)

    expect(screen.getByRole('heading', { name: 'What We Can Do for You' })).toBeInTheDocument()
    expect(screen.getByText(/from classic cuts to hot-towel shaves/i)).toBeInTheDocument()
  })

  it('shows four service cards with bottom labels', () => {
    render(<Services />)

    for (const label of [
      'Stylish Hair Cutting',
      'Quality Gel Shave',
      'Beard Trimming',
      'Executive Wash',
    ]) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })
})
