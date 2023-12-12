import { render, screen } from '@testing-library/react'
import SocialMediaBar from './index'

describe("social media link", () => {
  it('renders SocialMediaBar with correct links', () => {
    render(<SocialMediaBar />)
  
    const linkedinLink = screen.getByTestId('linkedin')
    expect(linkedinLink).toBeInTheDocument()
    expect(linkedinLink).toHaveAttribute(
      'href',
      'https:linkedin.com/in/chen-x-6bb138215',
    )
  
    const githubLink = screen.getByTestId('github')
    expect(githubLink).toBeInTheDocument()
    expect(githubLink).toHaveAttribute('href', 'https://github.com/tsxce')
  })
  
  it('renders SocialMediaBar with correct SVGs', () => {
    render(<SocialMediaBar />)
  
    const linkedinSvg = screen.getByTestId('linkedin').querySelector('svg')
    expect(linkedinSvg).toBeInTheDocument()
    expect(linkedinSvg).toHaveAttribute('viewBox', '0 0 128 128')
  
    const githubSvg = screen.getByTestId('github').querySelector('svg')
    expect(githubSvg).toBeInTheDocument()
    expect(githubSvg).toHaveAttribute('viewBox', '0 0 128 128')
  })
})
