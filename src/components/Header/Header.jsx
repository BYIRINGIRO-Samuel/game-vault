import React, { useRef, useEffect, useState } from 'react';
import './Header.css';
import Navbar from '../Navbar';

const Header = () => {
  const carouselRef = useRef(null);
  const listRef = useRef(null);
  const thumbnailRef = useRef(null);
  const timeRef = useRef(null);
  const nextRef = useRef(null);
  const prevRef = useRef(null);
  const audioRef = useRef(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const timeRunning = 3000;
  const timeAutoNext = 7000;
  let runTimeOut;
  let runNextAuto;

  const images = [
    {
      src: "/assets/images/1.jpg",
      title: "CALL OF DUTY",
      desc: "Step into the boots of elite soldiers in intense, cinematic battles across modern and historic warzones. Use high-tech gear, master a variety of weapons, and team up in gripping campaigns or competitive multiplayer modes where every decision counts."
    },
    {
      src: "/assets/images/2.jpg",
      title: "FC25",
      desc: "Experience next-gen football with lifelike gameplay, real clubs, and deeper career modes. Manage your squad, develop rising stars, and feel every goal, pass, and tackle with enhanced realism and dynamic matchday atmospheres."
    },
    {
      src: "/assets/images/3.webp",
      title: "HELL DRIVERS",
      desc: "Burn through the underworld in high-octane races where every drift could be your last. Choose from demonic rides, upgrade your infernal engines, dodge deadly traps, and challenge hellish bosses to dominate the fiery roads of chaos."
    },
    {
      src: "/assets/images/11.jpg",
      title: "MORTAL KOMBAT",
      desc: "Mortal Kombat is a legendary fighting game series known for its intense battles, iconic fighters like Scorpion and Sub-Zero, and its signature Fatalities. With a dark storyline across different realms, it delivers brutal action and unforgettable moments for fighting game fans."
    },
    {
      src: "/assets/images/4.jpg",
      title: "WHEELMAN",
      desc: "Wheelman puts you in the driver’s seat as an undercover agent and expert driver in a high-octane open-world action game. Set in the streets of Barcelona, it blends intense car chases, explosive stunts, and cinematic gameplay for a thrilling ride."
    },
    {
      src: "/assets/images/5.jpg",
      title: "STREET FIGHTER",
      desc: "Street Fighter is a classic fighting game franchise that set the standard for one-on-one combat. With a diverse roster of fighters like Ryu and Chun-Li, powerful special moves, and competitive gameplay, it’s a cornerstone of the genre."
    },
    {
      src: "/assets/images/7.jpg",
      title: "NBA",
      desc: "Get ready for fast breaks, buzzer-beaters, and non-stop action. Experience realistic player movements, dynamic crowd energy, and deep team customization as you climb the ranks and aim for championship glory on the hardwood."
    },
    {
      src: "/assets/images/8.jpg",
      title: "LEGACY OF KAI",
      desc: "Uncover the ancient secrets of a forgotten world. Join Kai on an epic journey to master mystical powers, battle fierce enemies, explore stunning realms, and restore balance to a crumbling legacy threatened by darkness."
    },
    {
      src: "/assets/images/9.png",
      title: "SPIDER MAN MILES MORALES",
      desc: "Swing through the streets of New York as the electrifying Miles Morales. Master bio-electric powers, stealth abilities, and epic aerial combat while facing powerful villains and uncovering a story that blends heroism, culture, and heart."
    },
    {
      src: "/assets/images/10.jpg",
      title: "BEACH BUGGY",
      desc: "Race through sandy shores and tropical landscapes in your custom beach buggy. Perform wild stunts, unleash crazy power-ups, and outsmart rivals in fast-paced, fun-filled tracks packed with excitement and surprises."
    },
  ];
  
  const showSlider = (type) => {
    const slider = listRef.current;
    const thumbnails = thumbnailRef.current;
    const carousel = carouselRef.current;

    const sliderItems = slider.querySelectorAll('.item');
    const thumbnailItems = thumbnails.querySelectorAll('.item');

    if (type === 'next') {
      slider.appendChild(sliderItems[0]);
      thumbnails.appendChild(thumbnailItems[0]);
      carousel.classList.add('next');
    } else {
      slider.prepend(sliderItems[sliderItems.length - 1]);
      thumbnails.prepend(thumbnailItems[thumbnailItems.length - 1]);
      carousel.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
      carousel.classList.remove('next');
      carousel.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
      nextRef.current.click();
    }, timeAutoNext);
  };

  const toggleAudio = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsAudioPlaying(true);
    } else {
      audioRef.current.pause();
      setIsAudioPlaying(false);
    }
  };

  useEffect(() => {
    runNextAuto = setTimeout(() => {
      nextRef.current.click();
    }, timeAutoNext);

    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.error("Error playing audio:", err);
      });
      setIsAudioPlaying(true);
    }

    return () => {
      clearTimeout(runNextAuto);
    };
  }, []);

  return (
    <>
      <Navbar/>
      <audio
        ref={audioRef}
        loop
        muted={false}
        src="/assets/audio/song4.mp3"
        className="hidden"
      />

      <div className="carousel" ref={carouselRef}>
        <div className="list" ref={listRef}>
          {images.map((img, i) => (
            <div className="item" key={i}>
              <img src={img.src} alt="" />
              <div className="content">
                <div className="title">{img.title}</div>
                <div className="des">{img.desc}</div>
                <div className="buttons">
                  <button className="bg-gray-200 text-black tracking-wider font-medium py-2 px-4 rounded-3xl cursor-pointer">PLAY</button>
                  <button className="border border-gray-200 text-gray-200 bg-transparent py-2 px-4 rounded-3xl cursor-pointer ">DOWNLOAD</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="thumbnail" ref={thumbnailRef}>
          {images.map((img, i) => (
            <div className="item" key={i}>
              <img src={img.src} alt="" />
              <div className="content">
                <div className="title">{img.title}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="arrows">
          <button id="prev" ref={prevRef} onClick={() => showSlider('prev')}>{"<"}</button>
          <button id="next" ref={nextRef} onClick={() => showSlider('next')}>{">"}</button>
        </div>
        <div className="time" ref={timeRef}></div>

        <div className="audio-control">
          <button onClick={toggleAudio} className="play-btn">
            {isAudioPlaying ? "Pause Music" : "Play Music"}
          </button>
        </div>
      </div>


    </>
  );
};

export default Header;
