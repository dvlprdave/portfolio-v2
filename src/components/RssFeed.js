import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Title } from '../styled-helpers/Title'

const RssFeed = () => {
  const [feed, setFeed] = useState({ items: [] })
  const [isLoading, setIsLoading] = useState(false)

  const rssData = async () => {
    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"

    let Parser = require('rss-parser');
    let parser = new Parser();
    
    (async () => {
      try{
        setIsLoading(true)
        let feed = await parser.parseURL(`${CORS_PROXY}https://papabearcodes.com/rss.xml`);
  
        setFeed(feed)
        setIsLoading(false)
      } catch (error) {
        console.log('error gathering RSS feed', error)
      }
    })();
  }

  useEffect(() => {
    rssData()
  }, [])

  return (
    <Wrapper>
      <Title blog>
        <span></span>
        <span>Blog Posts</span>
      </Title>
      {isLoading
      ? <LoadingMessage>Grabbing each post from the RSS feed. One moment...</LoadingMessage>
      : feed.items.slice(0, 3).map((item, i) => (
        <BlogPost key={i}>
          <PostTitle>
            <a href={item.link} target='_blank' rel='noopener noreferrer'>
              {item.title}
            </a>
          </PostTitle>
          <PublishDate>
            <p>{item.pubDate.slice(0, 17)}</p>
          </PublishDate>
        </BlogPost>
      ))}
    </Wrapper>
  )
}

export default RssFeed

const Wrapper  = styled.div`
  margin-bottom: 3rem;
`

const LoadingMessage  = styled.div`
  font-size: 1.25rem;
`

const BlogPost = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 786px) {
    flex-direction: column;
    margin: 0;
  }
`

const PostTitle = styled.p`
  font-size: 1.25rem;

  a {
    transition: ease-in-out 300ms;

    &:hover {
    color: #414145;
    }
  }

  @media (max-width: 786px) {
    margin-bottom: 5px;
  }
`

const PublishDate = styled.span`
  color: #414145;
  font-weight: normal;
`