import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { SocialIcon } from './SocialIcon'
import { socialPaths, type SocialName } from '../data'

describe('SocialIcon', () => {
  it('renders the brand path inside a hidden svg', () => {
    const { container } = render(<SocialIcon name="twitter" />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveAttribute('aria-hidden', 'true')
    expect(svg!.querySelector('path')).toHaveAttribute('d', socialPaths.twitter)
  })

  it('applies a custom className', () => {
    const { container } = render(<SocialIcon name="vimeo" className="h-4 w-4" />)
    expect(container.querySelector('svg')).toHaveClass('h-4 w-4')
  })

  it('has a path for every supported social name', () => {
    const names: SocialName[] = ['twitter', 'facebook', 'instagram', 'youtube', 'vimeo']
    names.forEach((name) => {
      expect(socialPaths[name]).toBeTruthy()
    })
  })
})
