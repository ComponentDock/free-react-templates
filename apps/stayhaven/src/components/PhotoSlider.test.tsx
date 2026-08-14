import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PhotoSlider } from './PhotoSlider'
import { PHOTOS } from '../data'

describe('PhotoSlider', () => {
  it('renders the Photos heading and every photo with its caption', () => {
    render(<PhotoSlider />)

    expect(screen.getByRole('heading', { level: 2, name: 'Photos' })).toBeInTheDocument()

    for (const photo of PHOTOS) {
      expect(screen.getByRole('img', { name: photo.caption })).toBeInTheDocument()
      expect(screen.getByText(photo.caption)).toBeInTheDocument()
    }
  })
})
