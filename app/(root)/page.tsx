import { SearchForm } from '@components/SearchForm';
import { StartupCard, StartupTypeCard } from '@components/StartupCard';
import { STARTUP_QUERY } from '@lib/queries';
import { client } from '@sanity/lib/client';
import { sanityFetch, SanityLive } from '@sanity/lib/live';
import React from 'react'

const Home = async ({ searchParams } : {
    searchParams: Promise<{ query?: string }>
}) => {
    const query = (await searchParams).query
    const params = { search: query || null };
    const { data: posts } = await sanityFetch({ query: STARTUP_QUERY, params });
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pinch Your Startup. <br />
          Connect With Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, andGet Noticed in Virtual Comptitions.
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className='text-30-semibold'>
            {query ? `Search for ${query}` : "All Startups"}
        </p>
        <ul className='mt-7 card_grid'>
            {posts?.length > 0 ? (
                posts.map((post: StartupTypeCard) => (
                    <StartupCard key={post?._id} post={post}/>
                ))
            ) : (
                <p className='no-results'>no startups found</p>
            )}
        </ul>
      </section>
      <SanityLive />
    </>
  );
}

export default Home;