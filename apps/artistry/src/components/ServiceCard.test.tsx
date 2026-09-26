import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ServiceCard } from './Services'
import { PenTool } from 'lucide-react'

describe('ServiceCard', () => {
  it('displays the service title', () => {
    render(
      <ServiceCard
        icon={<PenTool className="h-7 w-7" />}
        title="Web Design"
        description="Beautiful websites"
      />,
    )
    expect(screen.getByRole('heading', { name: 'Web Design' })).toBeInTheDocument()
  })

  it('displays the service description', () => {
    render(
      <ServiceCard
        icon={<PenTool className="h-7 w-7" />}
        title="Web Design"
        description="Beautiful websites"
      />,
    )
    expect(screen.getByText('Beautiful websites')).toBeInTheDocument()
  })

  it('renders the icon', () => {
    render(
      <ServiceCard
        icon={<PenTool className="h-7 w-7" />}
        title="Web Design"
        description="Beautiful websites"
      />,
    )
    expect(document.querySelector('svg')).toBeInTheDocument()
  })
})
