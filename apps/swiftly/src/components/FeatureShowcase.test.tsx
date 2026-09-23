import { render, screen } from '@testing-library/react'
import { FeatureShowcase } from './FeatureShowcase'

describe('FeatureShowcase', () => {
  const props = {
    subtitle: 'Life Changing App',
    heading: 'Test Heading',
    description: 'Test description text',
    imageUrl: 'https://example.com/image.jpg',
    imageAlt: 'Test image',
    reverse: false,
  }

  it('renders subtitle, heading, and description', () => {
    render(<FeatureShowcase {...props} />)
    expect(screen.getByText('Life Changing App')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Test Heading' })).toBeInTheDocument()
    expect(screen.getByText('Test description text')).toBeInTheDocument()
  })

  it('renders image with alt text', () => {
    render(<FeatureShowcase {...props} />)
    expect(screen.getByRole('img', { name: 'Test image' })).toBeInTheDocument()
  })

  it('renders Get Started CTA', () => {
    render(<FeatureShowcase {...props} />)
    expect(screen.getByRole('link', { name: /get started/i })).toBeInTheDocument()
  })
})
