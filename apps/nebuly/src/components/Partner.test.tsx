import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Partner } from './Partner'

describe('Partner', () => {
  it('renders five grayscale partner wordmarks that become opaque on hover', () => {
    render(<Partner />)
    for (const name of ['Microsoft', 'Android', 'Java', 'Google', 'Adobe']) {
      const logo = screen.getByText(name)
      expect(logo.className).toContain('opacity-20')
      expect(logo.className).toContain('hover:opacity-100')
    }
  })
})
