import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ImageDivider } from './ImageDivider'

describe('ImageDivider', () => {
  it('renders the divider image', () => {
    render(<ImageDivider />)
    const img = screen.getByRole('img', { name: /restaurant ambiance/i })
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
