import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Brand } from './Brand'

describe('Brand', () => {
  it('renders brand logo images', () => {
    render(<Brand />)
    const logos = screen.getAllByRole('img')
    expect(logos).toHaveLength(5)
    logos.forEach((logo) => {
      expect(logo).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    })
  })
})
