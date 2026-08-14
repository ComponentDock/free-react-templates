import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from './BrandIcons'

const icons = [
  { name: 'Facebook', Component: FacebookIcon },
  { name: 'Twitter', Component: TwitterIcon },
  { name: 'Instagram', Component: InstagramIcon },
  { name: 'LinkedIn', Component: LinkedInIcon },
] as const

describe('BrandIcons', () => {
  it.each(icons)('renders an aria-hidden $name svg with currentColor fill', ({ Component }) => {
    const { container } = render(<Component className="h-5 w-5" />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('aria-hidden', 'true')
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24')
    expect(svg).toHaveClass('h-5', 'w-5')
  })
})
