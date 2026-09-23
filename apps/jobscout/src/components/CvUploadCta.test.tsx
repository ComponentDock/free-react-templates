import { render, screen } from '@testing-library/react'
import { CvUploadCta } from './CvUploadCta'

describe('CvUploadCta', () => {
  it('renders the CTA heading', () => {
    render(<CvUploadCta />)
    expect(screen.getByText('Make a Difference with Your Online Resume!')).toBeInTheDocument()
  })

  it('renders the upload button', () => {
    render(<CvUploadCta />)
    expect(screen.getByText('Upload your CV')).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<CvUploadCta />)
    expect(screen.getByText('Upload Your Resume')).toBeInTheDocument()
  })
})
