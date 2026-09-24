import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ImagePanel } from './ImagePanel'

describe('ImagePanel', () => {
  it('renders the background image with overlay', () => {
    render(<ImagePanel />)

    const img = screen.getByRole('img', { name: 'Login background' })
    expect(img).toHaveAttribute('src', 'https://picsum.photos/seed/loginbolt/800/900')
  })
})
