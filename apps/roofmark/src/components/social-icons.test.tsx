import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
  DribbbleIcon,
} from './social-icons'

describe('social-icons', () => {
  it('renders FacebookIcon without crashing', () => {
    const { container } = render(<FacebookIcon />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('renders TwitterIcon without crashing', () => {
    const { container } = render(<TwitterIcon />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('renders InstagramIcon without crashing', () => {
    const { container } = render(<InstagramIcon />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('renders LinkedinIcon without crashing', () => {
    const { container } = render(<LinkedinIcon />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('renders DribbbleIcon without crashing', () => {
    const { container } = render(<DribbbleIcon />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('renders FacebookIcon with custom size', () => {
    const { container } = render(<FacebookIcon size={20} />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveAttribute('width', '20')
    expect(svg).toHaveAttribute('height', '20')
  })

  it('renders TwitterIcon with custom size', () => {
    const { container } = render(<TwitterIcon size={24} />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveAttribute('width', '24')
    expect(svg).toHaveAttribute('height', '24')
  })

  it('renders InstagramIcon with custom size', () => {
    const { container } = render(<InstagramIcon size={18} />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveAttribute('width', '18')
    expect(svg).toHaveAttribute('height', '18')
  })

  it('renders LinkedinIcon with custom size', () => {
    const { container } = render(<LinkedinIcon size={16} />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveAttribute('width', '16')
    expect(svg).toHaveAttribute('height', '16')
  })

  it('renders DribbbleIcon with custom size', () => {
    const { container } = render(<DribbbleIcon size={22} />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveAttribute('width', '22')
    expect(svg).toHaveAttribute('height', '22')
  })
})
