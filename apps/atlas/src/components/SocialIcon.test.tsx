import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { SocialIcon } from './SocialIcon'
import { socialIcons } from '../data'

describe('SocialIcon', () => {
  it('renders the brand icon path for the given network', () => {
    const { container } = render(<SocialIcon name="vimeo" className="h-4 w-4" />)
    expect(container.querySelector('svg path')).toHaveAttribute('d', socialIcons.vimeo.path)
    expect(container.querySelector('svg')).toHaveAttribute('viewBox', socialIcons.vimeo.viewBox)
  })
})
