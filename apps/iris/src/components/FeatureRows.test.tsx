import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { FEATURES, FEATURE_HEADING } from '../data'
import { FeatureRows } from './FeatureRows'

describe('FeatureRows', () => {
  it('renders four alternating photo/text rows with overlapping cards', () => {
    const { container } = render(<FeatureRows />)
    const section = container.querySelector('section')!
    expect(section).toHaveAttribute('id', 'about')
    expect(screen.getAllByRole('heading', { level: 4 })).toHaveLength(FEATURES.length)
    const images = section.querySelectorAll('img')
    expect(images).toHaveLength(FEATURES.length)
    expect(images[0]).toHaveAttribute('src', FEATURES[0].image)
    expect(screen.getAllByRole('link', { name: 'Explore Gallery' })).toHaveLength(FEATURES.length)
    expect(screen.getAllByRole('heading', { level: 4 })[0]).toHaveTextContent(FEATURE_HEADING)
  })

  it('flips the image side on alternating rows', () => {
    const { container } = render(<FeatureRows />)
    const images = container.querySelectorAll('section img')
    const firstImageWrap = images[0]!.parentElement!
    const secondImageWrap = images[1]!.parentElement!
    expect(firstImageWrap.className).not.toContain('lg:order-2')
    expect(secondImageWrap.className).toContain('lg:order-2')
  })
})
