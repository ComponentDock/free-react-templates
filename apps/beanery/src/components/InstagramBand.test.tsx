import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { InstagramBand } from './InstagramBand'
import { instagramHandle, instagramImages } from '../data'

describe('InstagramBand', () => {
  it('renders five square photos and the @handle button', () => {
    const { container } = render(<InstagramBand />)
    expect(container.querySelectorAll('img')).toHaveLength(instagramImages.length)
    const link = screen.getByRole('link', { name: instagramHandle })
    expect(link).toHaveAttribute('href', 'https://instagram.com')
  })
})
