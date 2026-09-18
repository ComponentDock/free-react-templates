import { render } from '@testing-library/react'
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from './social-icons'

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
})
