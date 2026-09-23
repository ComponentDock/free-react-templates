import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Partners } from './Partners'

describe('Partners', () => {
  it('renders 5 partner logos', () => {
    render(<Partners />)

    const logos = screen.getAllByRole('img')
    expect(logos).toHaveLength(5)
    logos.forEach((logo) => {
      expect(logo).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    })
  })
})
