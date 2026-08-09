import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading and four service cards', () => {
    render(<Services />)

    expect(screen.getByRole('heading', { name: 'What We Can Do for You' })).toBeInTheDocument()
    for (const name of [
      'Stylish Hair Cutting',
      'Quality Gel Shave',
      'Beard Trimming',
      'Executive Wash',
    ]) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
      expect(screen.getByRole('img', { name })).toHaveAttribute(
        'src',
        expect.stringContaining('picsum.photos'),
      )
    }
  })
})
