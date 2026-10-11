import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { FacebookIcon, InstagramIcon, TwitterIcon } from './BrandIcons'

describe('BrandIcons', () => {
  it('renders the three inline brand glyphs', () => {
    const { container } = render(
      <>
        <FacebookIcon className="facebook" />
        <TwitterIcon className="twitter" />
        <InstagramIcon className="instagram" />
      </>,
    )

    const [facebook, twitter, instagram] = Array.from(container.querySelectorAll('svg'))
    expect(facebook).toHaveAttribute('class', 'facebook')
    expect(twitter).toHaveAttribute('class', 'twitter')
    expect(instagram).toHaveAttribute('class', 'instagram')
    expect(container.querySelectorAll('path')).toHaveLength(3)
  })
})
