import Image from "next/image";

const tags: { name: string, className: string }[] = [
  {
    name: 'React',
    className: 'bg-red-500'
  },
  {
    name: 'Typescript',
    className: 'bg-blue-500'
  },
  {
    name: 'Next.js',
    className: 'bg-purple-500'
  },
  {
    name: 'Nest.js',
    className: 'bg-violet-500'
  },
  {
    name: 'Redux',
    className: 'bg-yellow-500'
  },
  {
    name: 'Tailwind',
    className: 'bg-orange-500'
  },
]

const skills: string[] = [
  "TypeScript, React, Redux, Next.js, Node.js",
  "E2E, unit testing (react-testing-library)",
  "Preprocessors: SCSS/SASS/LESS,TailwindCSS",
  "Cross-browser development",
  "Graphic editors: Figma",
  "Other: Git, BEM",
  "Scrum, Jira, YouTrack",
]

export default function Home() {
  return (
    <div className='grid grid-cols-1 gap-2'>
      <div className='flex flex-col gap-4 sm:flex-row sm:items-center items-start'>
        <Image src='/photo.jpeg' width={90} height={90} alt='avatar' title='avatar'
               className='rounded-full mx-auto sm:mx-0'/>
        <div>
          <h1>Marat Faizerakhmanov</h1>
          <p>Frontend Developer specializing in React and Next.js</p>
          <blockquote>I love to share experience and being a thankful student.</blockquote>
        </div>
      </div>
      <ul className='flex gap-2 flex-wrap'>
        {tags.map(({name, className}, index) =>
          <li key={index}
              className={`px-2 py-1 border border-black rounded text-white ${className} hover:drop-shadow-xl cursor-pointer`}>{name}</li>)}
      </ul>
      <div>
        <h2>Technical Skills:</h2>
        <ul className='grid grid-cols-1 list-disc list-inside'>
          {skills.map((skill, index) =>
            <li key={index}>{skill}</li>
          )}
        </ul>
      </div>
      <section>
        <h2>Portfolio:</h2>

        <article className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <figure className='relative h-52 sm:h-80 md:h-full'>
            <Image src='/innoads.jpg' alt='innoads'
                   title='innoads'
                   fill
                   sizes="(max-width: 768px) 100vw, 50vw"
                   style={{objectFit: "contain"}}/>
            <figcaption className='sr-only'>InnoAds screenshot</figcaption>
          </figure>

          <article className='flex flex-col justify-center'>
            <h3>Classified</h3>
            <p>FullStack (Next.JS + Nest.JS) <a href="https://innoads.ru">https://innoads.ru</a></p>
            <p>Customers login via Telegram. They can create, edit, delete their ads. After the add is postedm it is
              also posted to a Innopolis City Ads channel: <a href="https://t.me/innoads">https://t.me/innoads</a>
            </p>
            <p>
              It is helpful for over than 3000 citizens of Innopolis City
            </p>
            <p>
              App has nice PageSpeed, it has PWA(can be as a native app), has own backend. All actions are secure cause
              of JWT-tokens.
            </p>
            <p>
              It is SEO-optimized as well
            </p>
            <p>
              Try to login and check it out!
            </p>
            <ul>
              <li>frontend: <a
                href="https://github.com/maratismodest/innoads-frontend">https://github.com/innoads-frontend</a></li>
              <li>backend: <a
                href="https://github.com/maratismodest/innoads-backend">https://github.com/innoads-backend</a></li>

            </ul>
          </article>
        </article>

      </section>
      <p>Feel free to text me via Telegram: <a href="https://t.me/maratfazer">https://t.me/maratfazer</a></p>

    </div>
  )
}
