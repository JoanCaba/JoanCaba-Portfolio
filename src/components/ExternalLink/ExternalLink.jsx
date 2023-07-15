
const ExternalLink = ({ href, content, className }) => {
  return (
    <a href={href} rel="noopener noreferrer" target='_blank' className={className ? className : null}>{content}</a>
  )
}

export default ExternalLink