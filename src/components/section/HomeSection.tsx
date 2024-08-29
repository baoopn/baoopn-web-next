import Image from 'next/image'
import profilePic from '@/img/profile2.jpg'
import { useEffect, useState, useRef } from "react";
import { CURRENTLY_PLAYING_ENDPOINT } from "@/app/constants";
import PlayingAnimation from "@/components/Spotify/PlayingAnimation";

const HomeSection = () => {
  const [track, setTrack] = useState({
    albumImageUrl: '',
    artist: '',
    isPlaying: false,
    songUrl: '',
    title: '',
  });

  const [isVisible, setIsVisible] = useState(false);
  const isMounted = useRef(true);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100); // Delay to trigger the appear effect

    const fetchCurrentlyPlaying = () => {
      if (!isMounted.current) return;
      fetch(CURRENTLY_PLAYING_ENDPOINT)
        .then(response => response.json())
        .then(track => {
          if (!isMounted.current) return;
          setTrack(track);
          setTimeout(fetchCurrentlyPlaying, 5000);
        })
        .catch(error => {
          console.error('Error fetching currently playing track:', error);
          if (!isMounted.current) return;
          setTimeout(fetchCurrentlyPlaying, 2000);
        });
    };

    fetchCurrentlyPlaying();

    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <section id="home" className={`flex flex-col items-center justify-center min-h-screen text-center p-4 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="w-32 h-32 md:w-48 md:h-48 relative rounded-full overflow-hidden border-4 border-[var(--primary-pink)]">
        <Image
          src={profilePic}
          alt="Bao Nguyen"
          fill
          sizes="(max-width: 960px)"
          priority
          style={{ objectFit: 'cover' }}
          className="rounded-full"
        />
      </div>
      <h1 className="mt-4 text-3xl md:text-4xl font-bold">I&apos;m Bao Nguyen</h1>
      <p className="mt-2">A full-stack web and app developer</p>
      <p className="mt-6 text-gray-500">Welcome to my personal website!</p>
      {track.isPlaying && (
        <div className="flex flex-col mt-2 items-center justify-center">
          <div className="text-gray-500">
            Currently listening:&nbsp;
            <a href={track.songUrl} className="hover:underline" target="_blank">
              {track.title} by {track.artist}
            </a>
            .
          </div>
          <PlayingAnimation height="15px" width="13px" />
        </div>
      )}
    </section>
  )
}

export default HomeSection;