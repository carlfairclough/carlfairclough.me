import ActivityChart from "./ActivityChart";
import TweetCarousel from "./TweetCarousel";
import ImageGallery from "../../components/ImageGallery";
import FullWidthBanner from "../../components/FullWidthBanner";

export default function FactoryFM() {
  return (
    <div className="min-h-screen px-[4vw] max-w-[50em] font-mono leading-relaxed cursor-crosshair selection:bg-black selection:text-white text-slate-700">
      <header className="my-[6vh]">
        <h1 className="text-[1.6em] font-normal text-black">
          Factory.fm
          <span className="opacity-70 text-base block">2024-2025</span>
        </h1>
        <p className="opacity-70 text-base font-normal">
          Co-Founder, Music Social Platform
        </p>
      </header>

      <FullWidthBanner />

      <section className="my-[6vh]">
        <h2 className="text-xl font-normal mt-[2vw] mb-4 text-black">
          Strategy
        </h2>
        <p className="text-base font-normal mb-4">
          I started from the belief that music-social had stagnated. Scenes were
          fading, and the culture of gathering at venues had eroded—largely a
          consequence of Live Nation's stranglehold on the live music ecosystem.
        </p>
        <p className="text-base font-normal mb-4">
          This project was part of a broader data-sharing protocol, and my
          thesis was simple: by surfacing rich, high-signal, low-risk user data,
          we could attract third parties to build truly personal,
          community-driven experiences on top of it.
        </p>
        <p className="text-base font-normal mb-4">
          There's a growing appetite for music social and intentional
          consumption—the resurgence of vinyl, the rise of platforms like
          Letterboxd—it's all pointing in the same direction.
        </p>

        <p className="text-base font-normal">
          2024 was the right moment. Clear uptick in music influencers,
          continued increase in vinyl consumption, and undercurrent of
          dissatisfaction with Live Nation and Spotify from both artists and
          fans. "Doomscrolling" and "brainrot" entered common language—creators
          began publishing content about leading a more deliberate life without
          algorithms, without endless feeds, instead connecting directly to
          people.
        </p>
      </section>

      <section className="my-[6vh]">
        <h2 className="text-xl font-normal my-4 text-black">
          Execution & Growth
        </h2>

        <h3 className="text-lg font-normal mt-[2vw] mb-4 text-black mt-12">
          Phase 1: Proof of Concept
        </h3>
        <p className="text-base font-normal mb-4">
          The first phase was a rapid POC built on-site with co-founders—rapid
          prototyping, tight loops, no overhead. We jumped into a simple,
          centralized stack: Next.js and Postgres. The goal was to demonstrate
          that catalog data is available and can easily be consumed to build a
          logging feature.
        </p>

        <p className="text-base font-normal mb-4">
          We initially ingested data from a public API and developed a system to
          cross-reference data from different providers for redundancy. The data
          was stored lazily to manage costs and to allow us to attribute
          artists/releases to the people who first found them on Factory.fm.
        </p>

        <h3 className="text-lg font-normal mt-[2vw] mb-4 text-black mt-12">
          Phase 2: Mobile-First MVP
        </h3>
        <p className="text-base font-normal mb-4">
          After proving the concept, we hired a team to build out a mobile-first
          MVP. We brought on Shaun Church and Kaspar Pyyding to help reframe the
          experience around mobile-first behaviors. The website was initially
          only made available to a limited group using mobile web browsers.
        </p>
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

        <p className="text-base font-normal mb-4">
          From there, we launched a closed beta to stress test social dynamics
          and user intent.
        </p>
        <p className="text-base font-normal mb-4">
          One key insight: friend feeds, while intimate, could appear stagnant
          when overall content was light. To address this, we introduced an
          "All" feed—not as a homepage, but as a proof of life. Interestingly,
          many users leaned into the app more as a personal journaling tool than
          a social one. We observed one user create a haiku every day for a
          month, and other users onboard to "bomb" the public feed—K-Pop fans.
        </p>
        <h3 className="text-lg font-normal mt-[2vw] mb-4 text-black">
          Phase 3: Desktop Expansion
        </h3>
        <p className="text-base font-normal mb-4">
          After validating demand through our mobile-only web experience, and
          receiving broad positive feedback, we opened the desktop version
          publicly. This contained key strategic changes, such as making content
          public by default, and allowing search engines to detect our reviews.
          A core part of the content strategy was to meet popular releases
          before the media and other social media did. By ranking highly, we
          could become a forum for discussion.
        </p>

        <p className="text-base font-normal mb-4">
          By January, we had 2,000 users and a record of 16,000 albums spanning
          22,000 artists and 207,000 tracks—users could highlight specific
          tracks from releases, not just full albums. By April, we had crossed
          3,000 users.
        </p>

        <h3 className="text-lg font-normal text-red-600 mb-4 mt-[2vw]">
          Growth Challenges & Pivots
        </h3>
        <p className="text-base font-normal mb-4">
          Post-web release, growth appeared stagnant, but we recognized that
          large social media pushes drove new users & activity. We had gigantic
          spikes in users when influencers posted about us—these were the real
          markers of growth, and demonstrated that retention was a huge
          priority.
        </p>

        <ActivityChart />

        <p className="text-base font-normal mb-4">
          <span className="text-red-600">
            We had saturated our personal audiences and needed to move further.
          </span>{" "}
          We found that people arrived, logged a release, then didn't return. We
          began running scheduled content on social media, social features for
          sharing logs (OG images, Instagram cards), and ads for people
          searching for specific labels and releases.
        </p>

        <p className="text-base font-normal mb-4">
          However, one critical component was this: we had attracted users by
          displaying an alternative to AI "slop", we had allowed users to
          preserve their privacy by signing in with wallets, and we had taken a
          vocal stance against advertising. Because of this, re-engaging users
          via email campaigns was out of the question. We needed to go further
          and engage people where they were listening: on their phones, as a
          native companion app to their existing DSP.
        </p>

        <h3 className="text-lg font-normal mt-[2vw] mb-4 text-black">
          Phase 4: Native App Release
        </h3>
        <p className="text-base font-normal mb-4">
          We launched an iOS app with full feature parity and began work on
          Android. That release also marked the rollout of reporting and
          moderation tools—lightweight but necessary to scale trust. This
          validation led us to refine the entire experience focusing on
          mobile-first behaviors and optimizing the core user flows that drove
          the most engagement.
        </p>
        <p className="text-base font-normal mb-4">
          We identified how much people valued the website through user feedback
          and engagement patterns. Example tweets and social mentions showed
          genuine enthusiasm for the platform's approach to music discovery and
          community building.
        </p>
        <TweetCarousel>
          <blockquote
            className="twitter-tweet block w-80 flex-shrink-0"
            data-dnt="true"
            //@ts-expect-error
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
            //@ts-expect-error
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
            //@ts-expect-error
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
            //@ts-expect-error
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
            //@ts-expect-error
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
            //@ts-expect-error
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
            //@ts-expect-error
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

        <h2 className="text-xl font-normal mt-[2vw] mb-4 text-black">
          Outcome
        </h2>
        <p className="text-base font-normal mb-4">
          Our wedge was deliberately carved between existing incumbents: we
          wouldn't touch music playback (avoiding label hostility), we wouldn't
          have the complexity of Discogs (for fans, not collectors), and we
          wouldn't focus on data tracking like Last.fm. Factory was a place to
          connect with friends and fans, not compete with stats.
        </p>

        <p className="text-base font-normal mb-4">
          Factory was a loss-leader for the wider data-sharing vision, helping
          us raise roughly $1.5m at a $5m valuation. From early 2025, focus
          shifted heavily to that broader protocol. Factory hit the back
          burner—we had hoped it could become a source of data for other
          music/social websites within our network.
        </p>

        <p className="text-base font-normal">
          The technical choices—Next.js for hiring flexibility, Postgres via
          Supabase for easy egress—enabled rapid iteration without hiring
          backend or devops teams. Both Kaspar and Shaun could rapidly develop
          an API during native app builds, creating modular layers that could be
          broken out if needed.
        </p>
      </section>

      <footer className="my-[6vh]">
        <a href="/" className="text-base font-normal hover:underline">
          ← Back to home
        </a>
      </footer>
    </div>
  );
}
