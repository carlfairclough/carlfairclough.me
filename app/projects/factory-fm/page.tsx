import ActivityChart from "./ActivityChart";
import TweetCarousel from "./TweetCarousel";
import ImageGallery from "../../components/ImageGallery";

export default function FactoryFM() {
  return (
    <div className="min-h-screen font-mono leading-relaxed cursor-crosshair selection:bg-black selection:text-white text-slate-700">
      <header className="mb-[6vh] px-[4vw] max-w-[50em]">
        <h1 className="text-[1.6em] font-normal text-black">
          Factory.fm
          <span className="opacity-70 text-base block">2024-2025</span>
        </h1>
        <p className="opacity-70 text-base font-normal">
          Co-Founder, Music Social Platform
        </p>
      </header>

      {/* <FullWidthBanner /> */}

      <section className="my-[6vh] px-[4vw] max-w-[50em] ">
        <h2 className="text-xl font-normal mt-[2vw] mb-4 text-black">
          Strategy
        </h2>
        <p className="text-base font-normal mb-4">
          Music social had stagnated. Scenes were fading, venues felt corporate,
          and Live Nation had squeezed the life out of live music culture.
        </p>
        <p className="text-base font-normal mb-4">
          The thesis was simple: surface information that people are actively
          seeking to share, and third parties will build personal,
          community-driven experiences on top of it.
        </p>
        <p className="text-base font-normal mb-4">
          The signs were everywhere. Vinyl sales up, Letterboxd thriving, people
          talking about "doomscrolling" and "brainrot." Everyone wanted to
          connect more deliberately, without algorithms deciding what they see.
        </p>

        <p className="text-base font-normal">
          2024 was the moment. Music influencers were having their breakout year
          while both artists and fans were getting fed up with Spotify and Live
          Nation. People wanted something different.
        </p>
      </section>

      <section className="my-[6vh] px-[4vw] max-w-[50em]">
        <h2 className="text-xl font-normal my-4 text-black">
          Execution & Growth
        </h2>

        <h3 className="text-lg font-normal mt-[2vw] mb-4 text-black mt-12">
          Building the First Version
        </h3>
        <p className="text-base font-normal mb-4">
          We built fast. Me and my co-founders locked ourselves in a room with
          Next.js and Postgres. We wanted to left-curve this as hard as
          possible, aiming to earn the privilege of problems that come with
          scale, rather than optimize for them prematurely.
        </p>

        <p className="text-base font-normal mb-4">
          The first goal: prove you could actually review music without it being
          painful. We pulled catalog data from public APIs, cross-referenced
          everything for accuracy, and used the most simple, easy to scale
          storage strategy—only storing what we needed, when we needed it. Plus
          we could credit whoever discovered an artist or release first on
          Factory.
        </p>

        <h3 className="text-lg font-normal mt-[2vw] mb-4 text-black mt-12">
          Going Mobile-First
        </h3>
        <p className="text-base font-normal mb-4">
          Once we knew it worked, we brought in Shaun Church and Kaspar Pyyding
          to help build something more refined, and more usable. But still as
          lean as possible. We went mobile-web-only, because that's where people
          listen to music and learn about artists. That's where activity is. We
          kept it invite-only at first to keep things tight, and ensure we had
          something worth all of the inevitable bug-fixes.
        </p>
      </section>
      <ImageGallery
        images={[
          {
            src: "/projects/factory-fm/search-m-1.png",
            alt: "Factory.fm search flow step 1",
          },
          {
            src: "/projects/factory-fm/search-m-2.png",
            alt: "Factory.fm search flow step 2",
          },
          {
            src: "/projects/factory-fm/search-m-3.png",
            alt: "Factory.fm search flow step 3",
          },
          {
            src: "/projects/factory-fm/search-m-4.png",
            alt: "Factory.fm search flow step 4",
          },
          {
            src: "/projects/factory-fm/log-m-1.png",
            alt: "Factory.fm log flow step 1",
          },
          {
            src: "/projects/factory-fm/log-m-2.png",
            alt: "Factory.fm log flow step 2",
          },
          {
            src: "/projects/factory-fm/log-m-3.png",
            alt: "Factory.fm log flow step 3",
          },
          {
            src: "/projects/factory-fm/release-m-1.png",
            alt: "Factory.fm release flow step 1",
          },
          {
            src: "/projects/factory-fm/release-m-2.png",
            alt: "Factory.fm release flow step 2",
          },
          {
            src: "/projects/factory-fm/factory-mvp.png",
            alt: "Factory.fm MVP overview",
          },
        ]}
        caption="Mobile-first UI focused on generating social proof and the core logging experience"
      />
      <section className="px-[4vw] max-w-[50em]">
        <p className="text-base font-normal mb-4">
          We ran a closed beta to see how people actually used it.
        </p>
        <p className="text-base font-normal mb-4">
          Friend feeds felt empty when there wasn't much content, so we added an
          "All" feed: not as the main thing, but to prove there was an active
          community and to help people understand what others were saying. It
          helped to alleviate the anxiety of posting for new users. People
          started using it like a music diary. One person wrote haikus every day
          for a month. K-Pop fans joined to flood the public feed. It was
          working, just not entirely in the ways we expected.
        </p>
        <h3 className="text-lg font-normal mt-[2vw] mb-4 text-black">
          Opening Up
        </h3>
        <p className="text-base font-normal mb-4">
          People liked it, so we opened the web version publicly, with
          breakpoints so that people could use it on desktop. It was
          double-pronged: we wanted to let search engines find our reviews, and
          for people to use it as a discovery tool <i>without</i> creating an
          account. The plan: get to new releases before blogs and Reddit did.
          Rank high in search, become the place where people talk about music.
        </p>

        <p className="text-base font-normal mb-4">
          By January: 2,000 users, 16,000 albums, 22,000 artists, 207,000
          tracks. By April: 3,000 users.
        </p>

        <h3 className="text-lg font-normal text-red-600 mb-4 mt-[2vw]">
          The Growth Problem
        </h3>
        <p className="text-base font-normal mb-4">
          Growth stalled after launch. But when influencers posted about us,
          we'd get massive spikes. That told us everything: we needed better
          retention and better engagement in existing music-discussion venues,
          not just more signups.
        </p>
      </section>

      <ActivityChart />
      <section className="px-[4vw] max-w-[50em]">
        <p className="text-base font-normal mb-4">
          <span className="text-red-600">
            We'd maxed out our personal networks.
          </span>{" "}
          People would sign up, log one album, then disappear. We tried social
          media content, sharing features, even ads targeting specific labels
          and releases.
        </p>

        <p className="text-base font-normal mb-4">
          But we'd positioned ourselves as the anti-AI, anti-ads alternative to
          Spotify and their ilk. People signed in with wallets, we didn't do
          advertising. We couldn't email those users even if they wanted us to.
          Still, email campaigns felt deceptive. We needed to meet people where
          they actually listen to music: on their phones, and embed ourselves
          into the listening experience. If a user listened to an album twice in
          a row, or always listens to the same thing while driving, they should
          think of Factory. It needed to strongly position itself as the place
          to go and describe exactly certain albums tick boxes.
        </p>

        <h3 className="text-lg font-normal mt-[2vw] mb-4 text-black">
          Going Native
        </h3>
        <p className="text-base font-normal mb-4">
          We launched the iOS & Android apps simultaneously with everything the
          web version had, plus nice little shortcuts for power users. We added
          basic moderation tools—nothing fancy, but enough to keep things clean
          as we grew.
        </p>
        <p className="text-base font-normal mb-4">
          The response showed we were onto something. People genuinely loved
          what we were building.
        </p>
      </section>
      <TweetCarousel>
        <blockquote
          className="twitter-tweet block w-80 flex-shrink-0"
          data-dnt="true"
          //@ts-expect-error - Twitter blockquote align prop is not in React types
          align="left"
        >
          <p lang="en" dir="ltr">
            <a href="https://twitter.com/clivealfy/status/1837910342644465791?ref_src=twsrc%5Etfw">
              September 22, 2024
            </a>
          </p>
          &mdash; clivealfy (@clivealfy)
        </blockquote>

        <blockquote
          className="twitter-tweet block w-80 flex-shrink-0"
          data-dnt="true"
          //@ts-expect-error - Twitter blockquote align prop is not in React types
          align="left"
        >
          <p lang="en" dir="ltr">
            <a href="https://twitter.com/MikeShupp/status/1866843398851924087?ref_src=twsrc%5Etfw">
              December 11, 2024
            </a>
          </p>
          &mdash; Mike Shupp (@MikeShupp)
        </blockquote>

        <blockquote
          className="twitter-tweet block w-80 flex-shrink-0"
          data-dnt="true"
          //@ts-expect-error - Twitter blockquote align prop is not in React types
          align="left"
        >
          <p lang="en" dir="ltr">
            <a href="https://twitter.com/imalvarodelgado/status/1901658186286780786?ref_src=twsrc%5Etfw">
              November 15, 2024
            </a>
          </p>
          &mdash; Álvaro Delgado (@imalvarodelgado)
        </blockquote>

        <blockquote
          className="twitter-tweet block w-80 flex-shrink-0"
          data-dnt="true"
          //@ts-expect-error - Twitter blockquote align prop is not in React types
          align="left"
        >
          <p lang="en" dir="ltr">
            <a href="https://twitter.com/bigvibessss/status/1818031693397365151?ref_src=twsrc%5Etfw">
              July 30, 2024
            </a>
          </p>
          &mdash; bigvibessss (@bigvibessss)
        </blockquote>

        <blockquote
          className="twitter-tweet block w-80 flex-shrink-0"
          data-dnt="true"
          //@ts-expect-error - Twitter blockquote align prop is not in React types
          align="left"
        >
          <p lang="en" dir="ltr">
            <a href="https://twitter.com/elsapo_fede/status/1899183725880938499?ref_src=twsrc%5Etfw">
              November 8, 2024
            </a>
          </p>
          &mdash; elsapo_fede (@elsapo_fede)
        </blockquote>

        <blockquote
          className="twitter-tweet block w-80 flex-shrink-0"
          data-dnt="true"
          //@ts-expect-error - Twitter blockquote align prop is not in React types
          align="left"
        >
          <p lang="en" dir="ltr">
            <a href="https://twitter.com/kushgrandma_/status/1864011639906824562?ref_src=twsrc%5Etfw">
              December 4, 2024
            </a>
          </p>
          &mdash; kushgrandma_ (@kushgrandma_)
        </blockquote>

        <blockquote
          className="twitter-tweet block w-80 flex-shrink-0"
          data-dnt="true"
          //@ts-expect-error - Twitter blockquote align prop is not in React types
          align="left"
        >
          <p lang="en" dir="ltr">
            <a href="https://twitter.com/_johnsonator/status/1921668093547258014?ref_src=twsrc%5Etfw">
              November 9, 2024
            </a>
          </p>
          &mdash; _johnsonator (@_johnsonator)
        </blockquote>
      </TweetCarousel>
      <ImageGallery
        images={[
          {
            src: "/projects/factory-fm/profile-n-1.png",
            alt: "Factory.fm profile screen",
          },
          {
            src: "/projects/factory-fm/search-n-1.png",
            alt: "Factory.fm search screen",
          },
          {
            src: "/projects/factory-fm/log-n-1.png",
            alt: "Factory.fm log screen",
          },
          {
            src: "/projects/factory-fm/factory-n-cards-logs.png",
            alt: "Factory.fm cards logs view",
          },
          {
            src: "/projects/factory-fm/factory-n-cards-comments.png",
            alt: "Factory.fm cards comments view",
          },
          {
            src: "/projects/factory-fm/factory-n-cards-release.png",
            alt: "Factory.fm cards release view",
          },
        ]}
        caption="Native UI focused on honing core interaction, providing shortcuts via gestures such as long-press, and creating a comprehensive, reusable system which could be reused across desktop, web and mobile"
      />

      <section className="px-[4vw] max-w-[50em]">
        <h2 className="text-xl font-normal mt-[2vw] mb-4 text-black">
          Outcome
        </h2>
        <p className="text-base font-normal mb-4">
          We carved out our space carefully: no music playback (major labels
          would shut us down), no collector complexity like Discogs, no stat
          obsession like Last.fm. Just a place to connect over music you
          actually care about.
        </p>

        <p className="text-base font-normal mb-4">
          Factory helped us raise [REDACTED] at a [REDACTED] valuation for our
          bigger data-sharing vision. By early 2025, we shifted focus to that
          broader protocol. Factory became the back burner—still valuable as a
          data source for other music platforms in our network.
        </p>

        <p className="text-base font-normal">
          The tech choices paid off. Next.js meant we could hire easily.
          Postgres through Supabase meant no vendor lock-in. Kaspar and Shaun
          could build APIs fast without us needing a whole backend team.
          Everything stayed modular and so simple that it felt impossible to
          fail.
        </p>
      </section>
    </div>
  );
}
