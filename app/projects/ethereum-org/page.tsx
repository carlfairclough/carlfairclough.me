import ImageGallery from "@/app/components/ImageGallery";
import Link from "next/link";

export default function EthereumOrg() {
  return (
    <div className="min-h-screen px-[4vw] max-w-[50em] font-mono leading-relaxed cursor-crosshair selection:bg-black selection:text-white text-slate-700">
      <header className="my-[6vh]">
        <h1 className="text-[1.6em] font-normal text-black">
          Ethereum.org
          <span className="opacity-70 text-base block">2019-2020</span>
        </h1>
        <p className="opacity-70 text-base font-normal">
          Design System Lead & Website Redesign
        </p>
      </header>

      <section className="my-[6vh]">
        <h2 className="text-xl font-normal mt-[2vw] mb-4 text-black">
          Overview
        </h2>
        <p className="text-base font-normal mb-4">
          Ethereum.org was struggling. The team approached me to help build
          something that would actually work—a design system that regular people
          could use to contribute content, handle different languages, and grow
          with the community. What started as fixing their contribution flow
          turned into redesigning the entire site.
        </p>
        <div className="mb-4">
          <p className="text-base font-normal mb-2">
            <strong>The problem:</strong>{" "}
            {`A confusing website that didn't
            serve anybody well`}
          </p>
          <p className="text-base font-normal mb-2">
            <strong>The fix:</strong> Make it the go-to place for learning about
            Ethereum
          </p>
          <p className="text-base font-normal">
            <strong>The team:</strong> Worked with{" "}
            <a
              href="https://liamcobb.com/"
              className="underline decoration-wavy decoration-blue-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              Liam Cobb
            </a>{" "}
            on illustrations and brought in{" "}
            <a
              href="https://www.ryancordell.design/"
              className="underline decoration-wavy decoration-blue-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ryan Cordell
            </a>{" "}
            for content strategy
          </p>
        </div>
      </section>

      <section className="my-[6vh]">
        <h2 className="text-xl font-normal mt-[2vw] mb-4 text-black">
          The Problem
        </h2>
        <p className="text-base font-normal mb-4">
          {`Before 2018, ethereum.org was effectively just the Ethereum Foundation
          talking to itself:`}
        </p>
        <ul className="text-base font-normal mb-4 list-disc ml-6">
          <li>Barely any content, and what was there felt thin</li>
          <li>Only foundation people contributing</li>
          <li>Only mentioned projects they built</li>
          <li>No way for the community to actually help</li>
          <li>Just told people to "download stuff and code things"</li>
        </ul>

        <p className="text-base font-normal mb-4">
          Sam Richards put it perfectly: "ethereum.org basically was the
          ethereum foundation." But Ethereum had grown way beyond that—it needed
          a website that reflected the real community.
        </p>
        <p className="mb-4">
          After a redesign by an outside contributor in mid-2019, the problems
          remained: the intended audience of the website was unclear, and did
          not lend itself to being a "world computer" secured with billions of
          dollars in value. And there remained a dearth of impartial information
          regarding Ethereum.
        </p>
        <img
          src="/projects/ethereum/ethereumorg-july-2019.png"
          className="border border-slate-200 mb-4"
        />
        <p className="text-base font-normal">
          They needed someone to build something simple: a design system where
          anyone could contribute without jumping through hoops. Just GitHub,
          clear components, and obvious instructions about <em>what</em> things
          were for, <em>how</em> to use them, and <em>where</em> they belonged.
          The goal was turning ethereum.org into the place people trusted for
          learning about Ethereum. Neutral, helpful, and honest.
        </p>
      </section>

      <section className="my-[6vh]">
        <h2 className="text-xl font-normal mt-[2vw] mb-4 text-black">
          Design System Development
        </h2>
        <p className="text-base font-normal mb-4">
          I was initially engaged to lead a design system that would work for
          real audiences, via identified personas. Not just designers or
          developers, but anyone who wanted to help make Ethereum more
          accessible.
        </p>
        <p className="mb-4">
          The system had to incredibly simple and incredibly straightforward.
          Too much complexity would hinder contributions. It needed to handle:
        </p>
        <ul className="text-base font-normal mb-4 list-disc ml-6">
          <li>Hundreds of people creating content without breaking things</li>
          <li>Components that looked good no matter who used them</li>
          <li>Simple, clear instructions that didn't require a PhD</li>
          <li>Content that could grow organically without falling apart</li>
        </ul>
        <p className="text-base font-normal mb-4">
          This then became the foundation that let ethereum.org grow from 5
          lonely pages to hundreds of pages with thousands of contributors
          writing in over 50 languages.
        </p>
        <h3 className="mb-4 font-bold">How it worked:</h3>
        <p className="text-base font-normal">
          I used React and MDX so people could write in simple markdown but
          still use fancy components. Writers could focus on writing, designers
          could focus on design, and everything just worked together without
          anyone needing to become a coding expert.
        </p>
      </section>

      <section className="my-[6vh]">
        <h2 className="text-xl font-normal mt-[2vw] mb-4 text-black">
          The Transformation: Putting Principles Into Practice
        </h2>
        <p className="text-base font-normal mb-4">
          Working with Liam Cobb, we transformed ethereum.org into something
          that was highly accessible while also being hopeful and inspiring
          instead of confusing. Clean. Utopian. But basic and approachable.
        </p>

        <ImageGallery
          images={[
            {
              src: "/projects/ethereum/ethereum-redesign-homepage.png",
              alt: "The Ethereum homepage designed by Carl Fairclough",
            },
            {
              src: "/projects/ethereum/ethereum-redesign-developers.png",
              alt: "The Ethereum developer page designed by Carl Fairclough",
            },
            {
              src: "/projects/ethereum/ethereum-redesign-individuals.png",
              alt: "The Ethereum individuals page designed by Carl Fairclough",
            },
            {
              src: "/projects/ethereum/ethereum-redesign-eth.png",
              alt: "The Ethereum what is ether page designed by Carl Fairclough",
            },
          ]}
        />
        <p className="text-base font-normal mb-4">
          {`This wasn't just about making things pretty. The visual style had to
          make ethereum.org feel like a place for learning and possibility, not
          just dry technical docs. We wanted people to see Ethereum's potential
          for changing things, while making all the complex stuff feel
          approachable.`}
        </p>
        <p className="text-base font-normal">
          It worked. The community loved it, newcomers felt welcome, and the
          style became so synonymous with Ethereum that hundreds of other
          projects started using similar approaches.
        </p>
      </section>

      <section className="my-[6vh]">
        <h2 className="text-xl font-normal mt-[2vw] mb-4 text-black">
          Impact & Results
        </h2>
        <p className="text-base font-normal mb-4">
          The numbers tell the story:
        </p>
        <ul className="text-base font-normal mb-4 list-disc ml-6">
          <li>Went from dozens to thousands of people contributing</li>
          <li>5 pages became hundreds of pages of actual useful content</li>
          <li>Millions of people visit every month</li>
          <li>Available in 50 languages</li>
          <li>Over 4,000 volunteers translating content</li>
          <li>
            More than a quarter of visitors read it in their native language
          </li>
          <li>Fully community-run instead of foundation-controlled</li>
        </ul>
        <p className="text-base font-normal mb-4">
          {`
          Most importantly, ethereum.org became the place people actually go to
          learn about Ethereum. It's trusted, comprehensive, and genuinely
          helpful—exactly what the ecosystem needed.`}
        </p>
        <p className="text-base font-normal">
          Sam Richards talks about this whole transformation in his DevCon
          presentation{" "}
          <a
            href="https://www.youtube.com/watch?v=OX7tk7hLZsA&t=1125"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-wavy decoration-blue-700  cursor-pointer hover:text-blue-700"
          >
            Ethereum.org: Past, Present & Future (18:45)
          </a>
          . He explains how the design work made it possible for ethereum.org to
          become truly community-driven rather than just another corporate
          website.
        </p>
      </section>

      <footer className="my-[6vh]">
        <Link href="/" className="text-base font-normal hover:underline">
          ← Back to home
        </Link>
      </footer>
    </div>
  );
}
