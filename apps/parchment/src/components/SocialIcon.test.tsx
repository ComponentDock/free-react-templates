import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { SocialIcon } from './SocialIcon'
import { socialIcons, socialLabels, type SocialName } from '../data'

const names: SocialName[] = ['facebook', 'twitter', 'instagram', 'pinterest', 'google']

describe('SocialIcon', () => {
  it('renders an inline svg with the brand path for every social name', () => {
    for (const name of names) {
      const { container, unmount } = render(<SocialIcon name={name} />)
      const svg = container.querySelector('svg')
      const path = container.querySelector('path')

      expect(svg).toHaveAttribute('viewBox', socialIcons[name].viewBox)
      expect(svg).toHaveAttribute('aria-hidden', 'true')
      expect(path).toHaveAttribute('d', socialIcons[name].path)
      unmount()
    }
  })

  it('applies the className and keeps the accessible label on the wrapping link', () => {
    const { container } = render(
      <a href="#" aria-label={socialLabels.facebook}>
        <SocialIcon name="facebook" className="h-7 w-7" />
      </a>,
    )
    const svg = container.querySelector('svg')
    expect(svg?.getAttribute('class')).toContain('h-7')
    expect(svg?.getAttribute('class')).toContain('w-7')
  })
})
