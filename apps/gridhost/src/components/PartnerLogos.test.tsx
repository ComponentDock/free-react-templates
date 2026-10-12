import { render, screen } from '@testing-library/react'
import { PartnerLogos } from './PartnerLogos'
import { PARTNERS } from '../lib/site'

describe('PartnerLogos', () => {
  it('renders the title beside six named marks in a three-by-two grid', () => {
    render(<PartnerLogos />)

    expect(screen.getByRole('heading', { level: 2, name: 'Built on networks we trust' })).toHaveClass(
      'min-[768px]:text-[44px]',
    )

    for (const partner of PARTNERS) {
      expect(screen.getByRole('img', { name: `${partner} logo` })).toHaveClass('h-[44px]', 'w-[132px]')
    }

    expect(screen.getAllByRole('img')).toHaveLength(6)
  })
})
