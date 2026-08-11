import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { SocialIcon } from './SocialIcon'
import { socialPaths, type SocialName } from '../data'

describe('SocialIcon', () => {
  it('renders an svg with the brand path for every social name', () => {
    for (const name of Object.keys(socialPaths) as SocialName[]) {
      const { container } = render(<SocialIcon name={name} />)
      const svg = container.querySelector('svg')
      expect(svg).toBeInTheDocument()
      expect(svg!.querySelector('path')).toHaveAttribute('d', socialPaths[name])
    }
  })

  it('applies a custom className', () => {
    const { container } = render(<SocialIcon name="facebook" className="h-6 w-6" />)
    expect(container.querySelector('svg')).toHaveClass('h-6', 'w-6')
  })
})
