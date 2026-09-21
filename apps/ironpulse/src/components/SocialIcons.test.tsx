import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { TwitterIcon, FacebookIcon, InstagramIcon } from './SocialIcons'

describe('SocialIcons', () => {
  it('renders TwitterIcon', () => {
    const { container } = render(<TwitterIcon />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('renders FacebookIcon', () => {
    const { container } = render(<FacebookIcon />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('renders InstagramIcon', () => {
    const { container } = render(<InstagramIcon />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })
})
