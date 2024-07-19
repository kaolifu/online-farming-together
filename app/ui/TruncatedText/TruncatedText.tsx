import React from 'react'

interface TruncatedTextProps {
  text: string
  maxLength: number
}

const TruncatedText: React.FC<TruncatedTextProps> = ({ text, maxLength }) => {
  const isLongText = text.length > maxLength
  const truncatedText = isLongText ? text.slice(0, maxLength) + '...' : text

  return <p>{truncatedText}</p>
}

export default TruncatedText
