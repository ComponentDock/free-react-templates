import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders four service cards with images', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: 'Our Services' })).toBeInTheDocument()
    for (const title of ['Hair Styles', 'Beard Trim', 'Hot Shave', 'Hair Shampoo']) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
      expect(screen.getByRole('img', { name: title })).toHaveAttribute(
        'src',
        expect.stringContaining('picsum.photos'),
      )
    }
  })
})
