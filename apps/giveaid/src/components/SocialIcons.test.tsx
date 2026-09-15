import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { XIcon, FacebookIcon, InstagramIcon, LinkedinIcon, Heart } from './SocialIcons'

describe('SocialIcons', () => {
  it('renders XIcon', () => {
    const { container } = render(<XIcon className="h-4 w-4" />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('renders FacebookIcon', () => {
    const { container } = render(<FacebookIcon className="h-4 w-4" />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('renders InstagramIcon', () => {
    const { container } = render(<InstagramIcon className="h-4 w-4" />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('renders LinkedinIcon', () => {
    const { container } = render(<LinkedinIcon className="h-4 w-4" />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('renders Heart from lucide', () => {
    const { container } = render(<Heart className="h-3 w-3" />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })
})
