import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import {
  adsLargeTitle,
  adsSmallTitle,
  heroSlides,
  iconBoxes,
  newsletterTitle,
  products,
  skipLabel,
  xlAdTitle,
} from './data'

describe('App', () => {
  it('renders every section in source order', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: skipLabel })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: heroSlides[0]!.title }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: adsSmallTitle })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: adsLargeTitle })).toBeInTheDocument()
    for (const product of products) {
      expect(screen.getByRole('heading', { level: 3, name: product.name })).toBeInTheDocument()
    }
    expect(screen.getByRole('heading', { level: 2, name: xlAdTitle })).toBeInTheDocument()
    for (const box of iconBoxes) {
      expect(screen.getByRole('heading', { level: 3, name: box.title })).toBeInTheDocument()
    }
    expect(screen.getByRole('heading', { level: 2, name: newsletterTitle })).toBeInTheDocument()
  })
})
